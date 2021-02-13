import firebase from '@/lib/firebase';
const firestore = firebase.firestore();

export async function createSchedule(type, data) {
     const snapshot = firestore.collection(type).doc(data.id);
     const {
          time,
          monday,
          tuesday,
          wednesday,
          thursday,
          friday,
          saturday,
          sunday
     } = data;
     snapshot.set(
          {
               createdAt: firebase.firestore.FieldValue.serverTimestamp(),
               time,
               monday,
               tuesday,
               wednesday,
               thursday,
               friday,
               saturday,
               sunday
          },
          { merge: true }
     );
}
