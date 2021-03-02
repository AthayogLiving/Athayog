import firebase from '@/lib/firebase';
const firestore = firebase.firestore();

export async function getUserPayments(uid) {
     return await firestore
          .collection('users')
          .doc(uid)
          .collection('payments')
          .get();
}
