import firebase from '@/lib/firebase';
const firestore = firebase.firestore();

export async function createPayment(
     uid,
     courseId,
     courseName,
     duration,
     price,
     orderId
) {
     const refUsers = firestore.collection('users').doc(uid);
     await refUsers.set(
          {
               orderId
          },
          { merge: true }
     );
     await refUsers.collection('payments').doc(courseId).set({
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          courseId,
          courseName,
          duration,
          price,
          orderId
     });
}

export async function getUserPayments(uid) {
     return await firestore
          .collection('users')
          .doc(uid)
          .collection('payments')
          .get();
}
