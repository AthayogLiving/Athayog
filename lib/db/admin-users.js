import firebase from '@/lib/firebase';
const firestore = firebase.firestore();

export function createAdminUser(user) {
     return firestore.collection('adminUsers').doc().set(user, { merge: true });
}

export function updateAdminUser(userId, user) {
     return firestore
          .collection('users')
          .doc(userId)
          .update(user, { merge: true });
}
