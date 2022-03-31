import { getDatabase, ref, child, get } from "firebase/database";

var firebaseConfig = {
    apiKey: "AIzaSyDBm6tTYjyZ1EJJ1nM7l5n7gxdVBjyrVIs",
    authDomain: "sober-up-5924d.firebaseapp.com",
    projectId: "sober-up-5924d",
    storageBucket: "sober-up-5924d.appspot.com",
    messagingSenderId: "143058804614",
    appId: "1:143058804614:web:8835d49870b0e337071607"
  };

  firebase.initializeApp(firebaseConfig);
  var firestore = firebase.firestore()

  const db = firestore.collection("formdata")

  let submitButton = document.getElementById('submit')

  submitButton.addEventListener("click", (e) => {
    //Prevent Default Form Submission Behavior
    e.preventDefault()
  
    //Get Form Values
    let Name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let mob = document.getElementById('mob').value
    let age = document.getElementById('age').value
    let gender = document.getElementById('gender').value
    let addiction = document.getElementById('addiction').value
    let symtoms = document.getElementById('symtoms').value
    let method = document.getElementById('method').value
  
    //Save Form Data To Firebase
    db.doc().set({
      fname: firstName,
      email: email,
      mob: mob,
      age: age,
      gender: gender,
      addiction: addiction,
      symtoms:symtoms,
      method: method
    }).then( () => {
      console.log("Data saved")
    }).catch((error) => {
      console.log(error)
    })
  
    //alert
    alert("Your Form Has Been Submitted Successfully")
  })

const dbRef = ref(getDatabase());
get(child(dbRef, `users/${userId}`)).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});