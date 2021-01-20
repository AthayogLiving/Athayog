import { db } from '@/lib/firebase-admin';

export default async (req, res) => {
     const snapshot = await db.collection('faq').get();
     const faq = [];

     snapshot.forEach((doc) => {
          faq.push({ id: doc.id, ...doc.data() });
     });

     res.status(200).json({ faq });
};
