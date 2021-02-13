import firebase from '@/lib/firebase';
const firestore = firebase.firestore();

export async function createSchedule(type, data) {
     console.log(type, data);
     const snapshot = firestore.collection(type).doc();
     return await snapshot.set({
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          ...data
     });
}
