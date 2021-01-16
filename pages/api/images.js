import firebase from 'firebase/firebase-storage';

export default async (req, res) => {
     //  const storageRef = firebase.storage().ref();
     //  const fileRef = storageRef.child('hero').child(`${file.name}`);

     //   await fileRef.put(file).then(function (snapshot) {
     //        return snapshot;
     //   });

     // res.status(200).json({ fileUrl });
     if (req.method === 'POST') {
          // Process a POST request
          res.status(200).json('hello');
     } else {
          // Handle any other HTTP method
     }
};
