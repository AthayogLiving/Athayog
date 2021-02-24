import firebase from '@/lib/firebase';
const firestore = firebase.firestore();

export function createAdminUser(user) {
     return firestore.collection('adminUsers').doc().set(user, { merge: true });
}

export function updateAdminUser(userId, user) {
     return firestore.collection('adminUsers').doc(userId).update(user);
}

export async function checkUserExistByPhone(phone) {
     console.log(phone);
     const snapshot = await firestore
          .collection('users')
          .where('phone', '==', phone)
          .get();
     const user = [];

     console.log(snapshot);

     snapshot.forEach((doc) => {
          user.push({ id: doc.id, ...doc.data() });
     });

     return user;
}
