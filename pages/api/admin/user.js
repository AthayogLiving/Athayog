import { auth } from '@/lib/firebase-admin';
import Cors from 'cors';
import initMiddleware from '@/lib/cors-middleware';

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

    if (req.method === 'POST') {
        await auth
            .createUser({
                ...req.body
            })
            .then((userRecord) => {
                // See the UserRecord reference doc for the contents of userRecord.
                response = userRecord.uid;
            })
            .catch((error) => {
                response = error;
            });
    } else {
        // Handle any other HTTP method
    }

    res.status(200).json(response);

    // Rest of the API logic
    // res.json({ message: 'Hello Everyone!' });
}
