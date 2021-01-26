import { auth } from '@/lib/firebase-admin';
import Cors from 'cors';
import initMiddleware from '@/lib/cors-middleware';
import { db } from '@/lib/firebase-admin';

// Initialize the cors middleware
const cors = initMiddleware(
    // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
    Cors({
        // Only allow requests with GET, POST and OPTIONS
        methods: ['GET', 'POST', 'OPTIONS'],
        origin: true
    })
);

export default async function handler(req, res) {
    // Run cors
    await cors(req, res);

    let response = '';
    switch (req.method) {
        case 'POST':
            await auth
                .createUser({
                    ...req.body
                })
                .then((userRecord) => {
                    // See the UserRecord reference doc for the contents of userRecord.
                    response = userRecord;
                    res.status(200).json(response);
                })
                .catch((error) => {
                    response = error;
                    res.status(200).json(response);
                });
            break;
        case 'GET':
            const snapshot = await db.collection('adminUsers').get();
            const users = [];

            snapshot.forEach((doc) => {
                users.push({ id: doc.id, ...doc.data() });
            });
            res.status(200).json({ users });
            break;
        default:
            break;
    }
}
