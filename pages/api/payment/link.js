import Cors from 'cors';
import initMiddleware from '@/lib/cors-middleware';
const Razorpay = require('razorpay');
const axios = require('axios');

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
          const { data } = req.body;
          await axios
               .post('https://api.razorpay.com/v1/payment_links/', data, {
                    auth: {
                         username: process.env.RAZORPAY_KEY_ID,
                         password: process.env.RAZORPAY_SECRET
                    }
               })
               .then((response) => {
                    res.status(200).json(response.data);
               })
               .catch((error) => {
                    res.status(400)('Error', error.message);
               });
     }
}
