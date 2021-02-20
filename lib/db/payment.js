import firebase from '@/lib/firebase';
const firestore = firebase.firestore();

export async function createPaymentSession(
     uid,
     courseId,
     courseName,
     duration,
     price,
     referenceId,
     shortUrl
) {
     const refUsers = firestore.collection('users').doc(uid);
     await refUsers.set(
          {
               referenceId
          },
          { merge: true }
     );
     await refUsers.collection('payments').doc(courseId).set({
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          courseId,
          courseName,
          duration,
          price,
          status: 'initiated',
          referenceId,
          shortUrl
     });
}

export async function updatePaymentSession(
     uid,
     razorpay_payment_id,
     razorpay_payment_link_id,
     courseId,
     status
) {
     return await firestore
          .collection('users')
          .doc(uid)
          .collection('payments')
          .doc(courseId)
          .update(
               {
                    razorpay_payment_id,
                    razorpay_payment_link_id,
                    status
               },
               { merge: true }
          );
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

export async function getUserPayments(uid) {
     return await firestore
          .collection('users')
          .doc(uid)
          .collection('payments')
          .get();
}
