import firebase from '@/lib/firebase';
const firestore = firebase.firestore();
import { v4 as uuidv4 } from 'uuid';
export async function registerForm(
     uid,
     name,
     email,
     phone,
     gender,
     experience,
     style,
     course,
     referral,
     conditions,
     type
) {
     const storeLinks = firestore.collection('forms').doc();
     return await storeLinks.set({
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          uid,
          name,
          email,
          phone,
          gender,
          experience,
          style,
          course,
          referral,
          conditions,
          type
     });
}

export async function registerFormFree(
     uid,
     name,
     email,
     phone,
     gender,
     experience,
     style,
     course,
     referral,
     conditions,
     type,
     courseName,
     courseId,
     price,
     duration
) {
     const storeLinks = firestore.collection('forms').doc();
     await storeLinks.set({
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          uid,
          name,
          email,
          phone,
          gender,
          experience,
          style,
          course,
          referral,
          conditions,
          type
     });
     const refUsers = firestore.collection('users').doc(uid);
     const orderId = uuidv4();
     await refUsers.set(
          {
               orderId
          },
          { merge: true }
     );

     await firestore
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

export async function enquiryForm(name, email, phone, details, type) {
     const storeLinks = firestore.collection('enquiryForms').doc();
     return await storeLinks.set({
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          name,
          email,
          phone,
          details,
          type
     });
}

export async function leadForm(name, email, phone) {
     const storeLinks = firestore.collection('leadForms').doc();

     return await storeLinks.set({
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          name,
          email,
          phone
     });
}

export async function informationForm(
     name,
     email,
     phone,
     gender,
     experience,
     style,
     course,
     referral,
     conditions,
     type
) {
     const storeLinks = firestore.collection('forms').doc();
     return await storeLinks.set({
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          name,
          email,
          phone,
          gender,
          experience,
          style,
          course,
          referral,
          conditions,
          type
     });
}

export async function registerFormTrial(
     name,
     email,
     phone,
     gender,
     experience,
     style,
     course,
     referral,
     conditions,
     type
) {
     const storeLinks = firestore.collection('forms').doc();
     return await storeLinks.set({
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),

          name,
          email,
          phone,
          gender,
          experience,
          style,
          course,
          referral,
          conditions,
          type
     });
}
