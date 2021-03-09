import { getImageLinkFromFirebase } from '@/lib/db/db-admin';

export default async (req, res) => {
     try {
          const imageType = req.query.imageType;
          const mobile = req.query.mobile ? true : false;

          const images = await getImageLinkFromFirebase(imageType, mobile);

          res.status(200).json({ images });
     } catch (error) {
          res.status(500).json(error);
     }
};
