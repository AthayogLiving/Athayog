import firebase from '@/lib/firebase';
const firestore = firebase.firestore();
export async function registerForm(
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
     await storeLinks.set({
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
