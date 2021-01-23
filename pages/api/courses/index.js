import { db } from '@/lib/firebase-admin';

export default async (req, res) => {
    const snapshot = await db.collection('courses').get();
    const classes = [];

    snapshot.forEach((doc) => {
        classes.push({ id: doc.id, ...doc.data() });
    });

    res.status(200).json({ classes });
};
