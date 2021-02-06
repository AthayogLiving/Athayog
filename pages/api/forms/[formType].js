import Cors from 'cors';
import initMiddleware from '@/lib/cors-middleware';
import { registerForm } from '@/lib/db/forms';

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

     console.log(req.body);
     const {
          name,
          email,
          phone,
          gender,
          experience,
          style,
          course,
          referral,
          conditions,
          type
     } = req.body;

     if (req.method === 'POST') {
          await registerForm(
               name,
               email,
               phone,
               gender,
               experience,
               style,
               course,
               referral,
               conditions,
               type
          );
          return res.status(200).json({
               message: 'Updated Form'
          });
     }
}
