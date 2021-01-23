import { auth } from '@/lib/firebase-admin';

export default async (req, res) => {
    let response = '';
    const {
        query: { name, email, password },
        method
    } = req;

    if (req.method === 'POST') {
        await auth
            .createUser({
                email: email,
                emailVerified: true,
                password: password,
                displayName: name
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

    res.status(200).json({ response });
};
