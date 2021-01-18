import { getImageLinkFromFirebase } from '@/lib/db-admin';

export default async (req, res) => {
     const imageType = req.query.imageType;
     const images = await getImageLinkFromFirebase(imageType);

     res.status(200).json({ images });
};
