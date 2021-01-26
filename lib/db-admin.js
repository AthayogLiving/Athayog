import { db } from './firebase-admin';

export async function getImageLinkFromFirebase(imageType) {
    const snapshot = await db
        .collection('images')
        .where('imageType', '==', `${imageType}`)
        .get();
    const images = [];

    snapshot.forEach((doc) => {
        images.push({ id: doc.id, ...doc.data() });
    });

    return images;
}

export async function checkUserType(email, userType) {
    const snapshot = await db
        .collection(userType)
        .where('email', '==', `${email}`)
        .get();

    const user = [];

    snapshot.forEach((doc) => {
        user.push({ id: doc.id, ...doc.data() });
    });

    return user;
}
