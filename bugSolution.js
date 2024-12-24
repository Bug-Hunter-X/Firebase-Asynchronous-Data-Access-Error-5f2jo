```javascript
// Correct asynchronous handling using async/await
async function getData() {
  const docRef = doc(db, "collection", "docId");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    // Access data properties here, they are guaranteed to be populated
  } else {
    console.log("No such document!");
  }
}

// Correct asynchronous handling using promises
getDoc(docRef).then((docSnap) => {
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    //Access data properties here
  } else {
    // handle error
  }
}).catch((error) => {
  console.error("Error fetching document: ", error);
});
```