import firebase from '@/lib/firebase';
const firestore = firebase.firestore();
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

export async function enquiryForm(name, email, phone, details, type) {
     const storeLinks = firestore.collection('enquiryForms').doc();
     await storeLinks.set({
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          name,
          email,
          phone,
          details,
          type
     });
}
