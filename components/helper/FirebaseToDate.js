export const FirebaseToDate = (firebaseDate) => {
     return new Date(firebaseDate._seconds * 1000).toLocaleDateString('en-IN');
};
