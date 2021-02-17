import firebase from '@/lib/firebase';
const firestore = firebase.firestore();

export async function createOffering(
     name,
     description,
     days,
     price,
     isTrial,
     type
) {
     const offerings = firestore.collection('offerings').doc();
     return await offerings.set({
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          name,
          description,
          days: Number(days),
          price: Number(price),
          isTrial,
          isActive: true,
          type
     });
}

export async function updateOffering(
     id,
     name,
     description,
     days,
     price,
     isTrial,
     type
) {
     await firestore
          .collection('offerings')
          .doc(id)
          .update({ name, description, days, price, isTrial, type });
}

export async function updateOfferingActiveState(id, state) {
     await firestore
          .collection('offerings')
          .doc(id)
          .update({ isActive: state });
}

export async function deleteOffering(id) {
     return firestore.collection('offerings').doc(id).delete();
}
