import firebase from './firebase';

const firestore = firebase.firestore();
const app = firebase.app();

// User Related

export function createUser(uid, data) {
    return firestore
        .collection('users')
        .doc(uid)
        .set({ uid, ...data }, { merge: true });
}

export function createAdminUser(user) {
    return firestore.collection('adminUsers').doc().set(user, { merge: true });
}

// Images Related

export async function uploadImageToStorage(directory, image, isActive) {
    const storageRef = firebase.storage().ref();
    const uploadRef = storageRef.child(directory).child(`${image.name}`);
    await uploadRef.put(image);
    await uploadRef.getDownloadURL().then(function (url) {
        saveImageToStorage(url, directory, isActive, image.name);
    });
}

export async function saveImageToStorage(url, type, isActive, imageName) {
    const storeLinks = firestore.collection('images').doc();
    await storeLinks.set({
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        imageName: imageName,
        imageType: type,
        imageUrl: url,
        isActive: isActive
    });
}

export async function updateImageStatus(imageId, status) {
    await firestore
        .collection('images')
        .doc(imageId)
        .update({ isActive: status });
}

export async function deleteImage(imageId, imageType, imageName) {
    await firestore.collection('images').doc(imageId).delete();
    deleteImageFromStorage(imageType, imageName);
}

export async function deleteImageFromStorage(imageType, imageName) {
    const storageRef = firebase.storage().ref();
    const imageRef = storageRef.child(`${imageType}/${imageName}`);

    // Delete the file
    await imageRef
        .delete()
        .then(function () {
            // console.log('deleted succesfully');
        })
        .catch(function (error) {
            // console.log(error);
        });
}

// FAQ Related

export function createFaq(data) {
    return firestore
        .collection('faq')
        .doc(data.id)
        .update(...category);
}
