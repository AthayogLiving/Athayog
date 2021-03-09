import { db } from '@/lib/firebase-admin';

export default async (req, res) => {
     try {
          const snapshot = await db.collection('images').get();
          const images = [];

          snapshot.forEach((doc) => {
               images.push({ id: doc.id, ...doc.data() });
          });

          res.status(200).json({ images });
     } catch (error) {
          res.status(500).json(error);
     }
};
