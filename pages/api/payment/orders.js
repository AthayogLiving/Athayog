import Cors from 'cors';
import initMiddleware from '@/lib/cors-middleware';
const Razorpay = require('razorpay');

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
          const { amount, receipt } = req.body;
          console.log(amount, receipt);
          try {
               const instance = new Razorpay({
                    key_id: process.env.RAZORPAY_KEY_ID,
                    key_secret: process.env.RAZORPAY_SECRET
               });

               const options = {
                    amount: amount, // amount in smallest currency unit
                    currency: 'INR',
                    receipt: `receipt_order_${receipt}`
               };

               const order = await instance.orders.create(options);

               if (!order) return res.status(500).send('Some error occured');

               res.status(200).json(order);
          } catch (error) {
               res.status(500).send(error);
          }
     }
}
