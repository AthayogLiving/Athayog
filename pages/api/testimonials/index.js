import Cors from 'cors';
import initMiddleware from '@/lib/cors-middleware';
import { registerForm } from '@/lib/db/forms';
import { db } from '@/lib/firebase-admin';
import { createTestimonial } from '@/lib/db/testimonials';

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
     if (req.method === 'GET') {
          try {
               const snapshot = await db
                    .collection('testimonials')
                    .orderBy('createdAt', 'desc')
                    .get();
               const testimonials = [];

               snapshot.forEach((doc) => {
                    testimonials.push({ id: doc.id, ...doc.data() });
               });

               res.status(200).json({ testimonials });
          } catch (error) {
               res.status(500).json(error);
          }
     }

     if (req.method === 'POST') {
          try {
               const { name, review, rating, active } = req.body;
               await createTestimonial(name, review, rating, active);
               return res.status(200).json({
                    message: 'Updated Form'
               });
          } catch (error) {
               res.status(500).json(error);
          }
     }
}
