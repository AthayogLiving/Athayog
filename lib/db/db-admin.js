import { db } from '../firebase-admin';

export async function getImageLinkFromFirebase(imageType) {
     const snapshot = await db
          .collection('images')
          .where('imageType', '==', `${imageType}`)
          .get();
     const images = [];

     snapshot.forEach((doc) => {
          images.push({ id: doc.id, ...doc.data() });
     });

     return images;
}

export async function checkUserType(email, userType) {
     const snapshot = await db
          .collection(userType)
          .where('email', '==', `${email}`)
          .get();

     const user = [];

     snapshot.forEach((doc) => {
          user.push({ id: doc.id, ...doc.data() });
     });

     return user;
}

export async function getLatestSubmission(formType) {
     const snapshot = await db
          .collection(formType)
          .orderBy('createdAt', 'asc')
          .limit(1)
          .get();
     const formData = [];

     snapshot.forEach((doc) => {
          formData.push({ id: doc.id, ...doc.data() });
     });

     return formData;
}

export async function getSchedule(type) {
     const snapshot = await db
          .collection(type)
          .orderBy('firebaseTimeTrack')
          .get();
     const schedule = [];

     snapshot.forEach((doc) => {
          schedule.push({ id: doc.id, ...doc.data() });
     });

     return schedule;
}
