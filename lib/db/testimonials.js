import firebase from '@/lib/firebase';
const firestore = firebase.firestore();

export async function updateTestimonialsStatus(id, status) {
     await firestore
          .collection('testimonials')
          .doc(id)
          .update({ isActive: status });
}
