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
