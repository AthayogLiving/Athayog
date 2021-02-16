import Cors from 'cors';
import initMiddleware from '@/lib/cors-middleware';
import { updatePaymentDetails } from '@/lib/db/users';
const crypto = require('crypto');

// Initialize the cors middleware
const cors = initMiddleware(
     // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
     Cors({
          // Only allow requests with GET, POST and OPTIONS
          methods: ['GET', 'POST', 'OPTIONS'],
          origin: true
     })
);

export default async function handler(req, res) {
     // Run cors
     await cors(req, res);

     if (req.method === 'POST') {
          try {
               // getting the details back from our font-end
               const {
                    orderCreationId,
                    razorpayPaymentId,
                    razorpayOrderId,
                    razorpaySignature,
                    uid,
                    price,
                    duration,
                    description,
                    name
               } = req.body;

               // Creating our own digest
               // The format should be like this:
               // digest = hmac_sha256(orderCreationId + "|" + razorpayPaymentId, secret);
               //    const hashDigest = sha256(nonce + message);
               const shasum = crypto.createHmac(
                    'sha256',
                    process.env.RAZORPAY_SECRET
               );

               shasum.update(`${orderCreationId}|${razorpayPaymentId}`);

               const digest = shasum.digest('hex');

               // comaparing our digest with the actual signature
               if (digest !== razorpaySignature)
                    return res
                         .status(400)
                         .json({ msg: 'Transaction not legit!' });

               // THE PAYMENT IS LEGIT & VERIFIED
               // YOU CAN SAVE THE DETAILS IN YOUR DATABASE IF YOU WANT

               const paymentDetails = {
                    razorpayOrderId,
                    price,
                    duration,
                    description,
                    name,
                    uid
               };

               await updatePaymentDetails(razorpayPaymentId, paymentDetails);

               res.json({
                    msg: 'success',
                    orderId: razorpayOrderId,
                    paymentId: razorpayPaymentId
               });
          } catch (error) {
               res.status(500).send(error);
          }
     }
}
