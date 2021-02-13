import firebase from '@/lib/firebase';
const firestore = firebase.firestore();

export async function updateSchedule(type, data) {
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

export function createSchedule(type, data) {
     const snapshot = firestore.collection(type).doc();
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
     return snapshot.set({
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          time,
          monday,
          tuesday,
          wednesday,
          thursday,
          friday,
          saturday,
          sunday
     });
}
