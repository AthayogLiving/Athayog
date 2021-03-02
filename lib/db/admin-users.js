import firebase from '@/lib/firebase';
const firestore = firebase.firestore();

export function createAdminUser(user) {
     return firestore
          .collection('adminUsers')
          .doc(user.uid)
          .set({ ...user });
}

export function updateAdminUser(userId, user) {
     return firestore.collection('adminUsers').doc(userId).update(user);
}

export async function checkUserExistByPhone(phone) {
     const snapshot = await firestore
          .collection('users')
          .where('phone', '==', phone)
          .get();
     const user = [];

     snapshot.forEach((doc) => {
          user.push({ id: doc.id, ...doc.data() });
     });

     console.log('Hello');

     return user;
}
