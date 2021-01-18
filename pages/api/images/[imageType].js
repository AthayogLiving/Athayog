import { db } from '@/lib/firebase-admin';

export default async (req, res) => {
     if (req.method === 'GET') {
          const {
               query: { imageType }
          } = req;
          const snapshot = await db
               .collection('images')
               .where('imageType', '==', `${imageType}`)
               .get();
          const images = [];

          snapshot.forEach((doc) => {
               images.push({ id: doc.id, ...doc.data() });
          });

          res.status(200).json({ images });
     } else if (req.method === 'DELETE') {
          const res = await db.collection('images').doc('DC').delete();
     }
};
