import firebase from '@/lib/firebase';
const firestore = firebase.firestore();
export function createUser(uid, data) {
     return firestore
          .collection('users')
          .doc(uid)
          .set({ uid, ...data }, { merge: true });
}

export function updatePaymentDetails(razorpayPaymentId, data) {
     firestore
          .collection('payments')
          .doc(razorpayPaymentId)
          .set({ razorpayPaymentId, ...data });
     updateUserWithPayment(data.uid, razorpayPaymentId, data.courseId);
}

export function updateUserWithPayment(uid, razorpayPaymentId, courseId) {
     return firestore
          .collection('users')
          .doc(uid)
          .set({ razorpayPaymentId, courseId }, { merge: true });
}
