import firebaseApp, { db } from "../firebase";

//Add new Data
const createUser = (collectionName, data) => {
    db.collection(collectionName)
        .add(data)
        .then(rs => console.log(rs))
        .catch(error => console.log(error));
};

//Update data from firebase
export const updateData = (collectionName, newData) => {
    db.collection(collectionName).get().then(allDocs => {
        allDocs.forEach(doc => {
            if (doc.data().authID === firebaseApp.auth().currentUser.uid) {
                db.collection(collectionName)
                    .doc(doc.id)
                    .update(newData)
                    .then(() => console.log("updated"))
                    .catch(() => console.log("fail"));
            }
        });
    });
};

export default createUser;
