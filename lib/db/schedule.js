import firebase from '@/lib/firebase';
const firestore = firebase.firestore();

export async function updateSchedule(type, data) {
     const converToFull = (time, minutes, period) => {
          const fullDate =
               period == 'pm'
                    ? Number(time) + 12 + ':' + minutes + ':' + '00'
                    : time + ':' + minutes + ':' + '00';
          return new Date('1970-01-01T' + fullDate);
     };
     const snapshot = firestore.collection(type).doc(data.id);
     const {
          fromHours,
          fromMinutes,
          fromPeriod,
          toHours,
          toMinutes,
          toPeriod,
          specialCase,
          monday,
          tuesday,
          wednesday,
          thursday,
          friday,
          saturday,
          sunday
     } = data;
     let specialCaseCheck = specialCase == undefined ? '' : specialCase;
     console.log(specialCaseCheck);
     snapshot.set(
          {
               createdAt: firebase.firestore.FieldValue.serverTimestamp(),
               fromHours,
               fromMinutes,
               fromPeriod,
               toHours,
               toMinutes,
               toPeriod,

               firebaseTimeTrack: firebase.firestore.Timestamp.fromDate(
                    converToFull(fromHours, fromMinutes, fromPeriod)
               ),
               specialCase: specialCaseCheck,
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
          fromHours,
          fromMinutes,
          fromPeriod,
          toHours,
          toMinutes,
          toPeriod,
          firebaseTimeTrack,
          specialCase,
          monday,
          tuesday,
          wednesday,
          thursday,
          friday,
          saturday,
          sunday
     } = data;
     let specialCaseCheck = specialCase == undefined ? '' : specialCase;
     console.log(specialCaseCheck);
     return snapshot.set({
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          fromHours,
          fromMinutes,
          fromPeriod,
          toHours,
          toMinutes,
          toPeriod,
          specialCase: specialCaseCheck,
          firebaseTimeTrack: firebase.firestore.Timestamp.fromDate(
               firebaseTimeTrack
          ),
          monday,
          tuesday,
          wednesday,
          thursday,
          friday,
          saturday,
          sunday
     });
}
