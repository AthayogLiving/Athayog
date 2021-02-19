import Cors from 'cors';
import initMiddleware from '@/lib/cors-middleware';
let crypto = require('crypto');

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
               const {
                    razorpay_payment_id,
                    razorpay_payment_link_id,
                    razorpay_payment_link_reference_id,
                    razorpay_payment_link_status,
                    razorpay_signature
               } = req.query;

               let expected_signature =
                    razorpay_payment_link_id +
                    '|' +
                    razorpay_payment_link_reference_id +
                    '|' +
                    razorpay_payment_link_status +
                    '|' +
                    razorpay_payment_id;

               let digest = crypto
                    .createHmac('sha256', process.env.RAZORPAY_SECRET)
                    .update(expected_signature)
                    .digest('hex');

               // comaparing our digest with the actual signature
               if (digest !== razorpay_signature) {
                    return res
                         .status(400)
                         .json({ msg: 'Transaction not legit!' });
               }

               res.json({
                    msg: 'success',
                    razorpay_payment_id,
                    razorpay_payment_link_id,
                    razorpay_payment_link_reference_id,
                    razorpay_payment_link_status
               });
          } catch (error) {
               res.status(500).send(error);
          }
     }
}
