import { db } from '@/lib/firebase-admin';

export default async (req, res) => {
     const snapshot = await db
          .collection('images')
          .where('imageType', '==', 'gallery')
          .get();
     const images = [];

     snapshot.forEach((doc) => {
          images.push({ id: doc.id, ...doc.data() });
     });

     res.status(200).json({ images });
};
