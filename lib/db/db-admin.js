import { db } from '../firebase-admin';

export async function getImageLinkFromFirebase(imageType, mobile) {
     const snapshot = await db
          .collection(mobile ? 'mobileImages' : 'images')
          .where('imageType', '==', `${imageType}`)
          .get();
     const images = [];

     snapshot.forEach((doc) => {
          images.push({ id: doc.id, ...doc.data() });
     });

     return images;
}

export async function getImages(imageType) {
     const snapshot = await db
          .collection('images')
          .where('imageType', '==', `${imageType}`)
          .get();
     const images = [];

     snapshot.forEach((doc) => {
          images.push({ id: doc.id, ...doc.data() });
     });

     return { images };
}

export async function getTestimonials() {
     const snapshot = await db.collection('testimonials').limit(5).get();

     const testimonials = [];

     snapshot.forEach((doc) => {
          testimonials.push({ id: doc.id, ...doc.data() });
     });

     return { testimonials };
}

export async function getGalleryImages() {
     const snapshot = await db
          .collection('images')
          .where('imageType', '==', `gallery`)
          .get();
     const images = [];

     snapshot.forEach((doc) => {
          images.push({ id: doc.id, ...doc.data() });
     });

     return { images };
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
          .orderBy('firebaseTimeTrack', 'asc')
          .get();
     const schedule = [];

     snapshot.forEach((doc) => {
          schedule.push({ id: doc.id, ...doc.data() });
     });

     return schedule;
}

export async function createPayment(
     uid,
     courseId,
     courseName,
     duration,
     price,
     orderId
) {
     const refUsers = db.collection('users').doc(uid);

     await refUsers.set(
          {
               orderId
          },
          { merge: true }
     );

     await db
          .collection('users')
          .doc(uid)
          .collection('payments')
          .doc(courseId)
          .set({
               courseId,
               courseName,
               duration,
               price,
               orderId
          });
}

export function createAdminUser(user) {
     return db
          .collection('adminUsers')
          .doc(user.uid)
          .set({ ...user });
}
