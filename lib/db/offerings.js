import firebase from '@/lib/firebase';
const firestore = firebase.firestore();
import { compareDesc, compareAsc, parseISO } from 'date-fns';

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

export async function getOffer(type) {
     try {
          let snapshot = await firestore
               .collection('offerings')
               .where('type', '==', type)
               .get();

          const offers = [];

          snapshot.forEach((doc) => {
               offers.push({ id: doc.id, ...doc.data() });
          });

          offers.sort((a, b) =>
               compareAsc(parseISO(a.createdAt), parseISO(b.createdAt))
          );

          return { offers };
     } catch (error) {
          return { error };
     }
}
