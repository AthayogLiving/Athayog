import { db } from '@/lib/firebase-admin';

export default async (req, res) => {
     const snapshot = await db.collection('testimonials').limit(4).get();
     const testimonials = [];

     snapshot.forEach((doc) => {
          testimonials.push({ id: doc.id, ...doc.data() });
     });

     res.status(200).json({ testimonials });
};
