import Cors from 'cors';
import initMiddleware from '@/lib/cors-middleware';
import { createPayment } from '@/lib/db/db-admin';
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
               const crypto = require('crypto');
               const secret = process.env.RAZORPAY_WEBHOOK_SECRET;

               const digest = crypto
                    .createHmac('sha256', secret)
                    .update(JSON.stringify(req.body))
                    .digest('hex');

               const headerSignature = req.headers['x-razorpay-signature'];

               // // comaparing our digest with the actual signature
               if (digest !== headerSignature) {
                    return res
                         .status(400)
                         .json({ msg: 'Transaction not legit!' });
               }

               const entity = req.body.payload.payment.entity;

               await createPayment(
                    entity.notes.userId,
                    entity.notes.courseId,
                    entity.notes.courseName,
                    entity.notes.duration,
                    Number(entity.notes.price),
                    entity.order_id
               );

               res.status(200).json({ status: 'success' });
          } catch (error) {
               res.status(500).send(error);
          }
     }
}
