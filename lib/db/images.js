import firebase from '@/lib/firebase';
const firestore = firebase.firestore();

export async function uploadImageToStorage(
     directory,
     alt,
     image,
     isActive,
     isMobile
) {
     const storageRef = firebase.storage().ref();
     const uploadRef = storageRef.child(directory).child(`${image.name}`);
     await uploadRef.put(image);
     await uploadRef.getDownloadURL().then(function (url) {
          const storeLinks = firestore.collection('images').doc();
          return storeLinks.set({
               createdAt: firebase.firestore.FieldValue.serverTimestamp(),
               imageName: image.name,
               imageType: directory,
               alt: alt,
               imageUrl: url,
               isActive: isActive,
               isMobile: isMobile
          });
     });
}

export async function updateImageStatus(imageId, status, isMobile) {
     await firestore
          .collection(isMobile ? 'mobileImages' : 'images')
          .doc(imageId)
          .update({ isActive: status });
}

export async function deleteImage(imageId, imageType, imageName, isMobile) {
     const collection = isMobile ? 'mobileImages' : 'images';
     await firestore.collection(collection).doc(imageId).delete();
     deleteImageFromStorage(imageType, imageName);
}

export async function deleteImageFromStorage(imageType, imageName) {
     const storageRef = firebase.storage().ref();
     const imageRef = storageRef.child(`${imageType}/${imageName}`);

     return await imageRef
          .delete()
          .then(function () {})
          .catch(function (error) {});
}
