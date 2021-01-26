import { db, auth } from '@/lib/firebase-admin';

export default async (req, res) => {
    const token = req.headers.token;

    await auth
        .verifyIdToken(token)
        .then((decodedToken) => {
            const snapshot = db.collection('users').get();
            const users = [];
            snapshot.forEach((doc) => {
                users.push({ id: doc.id, ...doc.data() });
                res.status(200).json({ users });
            });
        })
        .catch((error) => {
            res.status(200).json(error);
        });
};
