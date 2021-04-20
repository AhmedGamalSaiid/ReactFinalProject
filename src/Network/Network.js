import firebaseApp, { db } from "../firebase";

//Add new Data
const createUser = (collectionName, data) => {
  db.collection(collectionName)
    .add(data)
    .then((rs) => {
      console.log(rs);
    })
    .catch((error) => console.log(error));
};

//Update data from firebase
export const updateData = (collectionName, newData) => {
  db.collection(collectionName).onSnapshot((data) => {
    for (const key in data.docs) {
      if (data.docs[key].data().authID === firebaseApp.auth().currentUser.uid) {
        db.collection(collectionName)
          .doc(data.docs[key].id)
          .update(newData)
          .then(() => {
            console.log("updated");
          })
          .catch((e) => {
            console.log("fail");
            console.log(e);
          });
      }
    }
  });
};
export default createUser;
