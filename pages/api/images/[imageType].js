import { getImageLinkFromFirebase } from '@/lib/db-admin';

export default async (req, res) => {
     if (req.method === 'GET') {
          const imageType = req.query.imageType;
          const images = await getImageLinkFromFirebase(imageType);

          res.status(200).json({ images });
     } else if (req.method === 'DELETE') {
          const res = await db.collection('images').doc('DC').delete();
     }
};
