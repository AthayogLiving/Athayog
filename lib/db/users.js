import firebase from '@/lib/firebase';
const firestore = firebase.firestore();
export function createUser(uid, data) {
     return firestore
          .collection('users')
          .doc(uid)
          .set({ uid, ...data }, { merge: true });
}

export function updatePaymentDetails(razorpayPaymentId, data) {
     console.log(razorpayPaymentId, data);
     return firestore
          .collection('payments')
          .doc(razorpayPaymentId)
          .set({ razorpayPaymentId, ...data });
}
