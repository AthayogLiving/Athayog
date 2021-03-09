import { db } from '@/lib/firebase-admin';

export default async (req, res) => {
     try {
          const snapshot = await db.collection('faqs').get();
          const faq = [];

          snapshot.forEach((doc) => {
               faq.push({ id: doc.id, ...doc.data() });
          });

          res.status(200).json({ faq });
     } catch (error) {
          res.status(500).json(error);
     }
};
