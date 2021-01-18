import firebase from './firebase';

const firestore = firebase.firestore();
const app = firebase.app();

export function createUser(uid, data) {
     return firestore
          .collection('users')
          .doc(uid)
          .set({ uid, ...data }, { merge: true });
}

export async function uploadImageToStorage(directory, image) {
     const storageRef = firebase.storage().ref();
     const uploadRef = storageRef.child(directory).child(`${image.name}`);
     await uploadRef.put(image);
     await uploadRef.getDownloadURL().then(function (url) {
          saveImageToStorage(url, directory);
     });
}

export async function saveImageToStorage(url, type) {
     const storeLinks = firestore.collection('images').doc();
     await storeLinks.set({
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          imageType: type,
          imageUrl: url
     });
}

export async function deleteImage(imageId, imageRef) {
     await firestore.collection('images').doc(imageId).delete();
     deleteImageFromStorage(imageId);
}

export async function deleteImageFromStorage(imageId) {
     const storageRef = firebase.storage().ref();
     const imageRef = storageRef.child('wallhaven-pk2d6j.jpg');

     // Delete the file
     await imageRef
          .delete()
          .then(function () {
               console.log('deleted succesfully');
          })
          .catch(function (error) {
               console.log(error);
          });
}

// export async function deleteSite(id) {
//      firestore.collection('sites').doc(id).delete();
//      const snapshot = await firestore
//           .collection('feedback')
//           .where('siteId', '==', id)
//           .get();

//      const batch = firestore.batch();

//      snapshot.forEach((doc) => {
//           batch.delete(doc.ref);
//      });

//      return batch.commit();
// }

// export async function updateSite(id, newValues) {
//      return firestore.collection('sites').doc(id).update(newValues);
// }

// export function createFeedback(data) {
//      return firestore.collection('feedback').add(data);
// }

// export function deleteFeedback(id) {
//      return firestore.collection('feedback').doc(id).delete();
// }

// export function updateFeedback(id, newValues) {
//      return firestore.collection('feedback').doc(id).update(newValues);
// }

// export async function createCheckoutSession(uid) {
//      const checkoutSessionRef = await firestore
//           .collection('users')
//           .doc(uid)
//           .collection('checkout_sessions')
//           .add({
//                price: process.env.NEXT_PUBLIC_PRICE_ID,
//                allow_promotion_codes: true,
//                success_url: window.location.origin,
//                cancel_url: window.location.origin
//           });

//      checkoutSessionRef.onSnapshot(async (snap) => {
//           const { sessionId } = snap.data();

//           if (sessionId) {
//                const stripe = await getStripe();

//                stripe.redirectToCheckout({ sessionId });
//           }
//      });
// }

// export async function goToBillingPortal() {
//      const functionRef = app
//           .functions('us-central1')
//           .httpsCallable('ext-firestore-stripe-subscriptions-createPortalLink');

//      const { data } = await functionRef({
//           returnUrl: `${window.location.origin}/account`
//      });

//      window.location.assign(data.url);
// }
