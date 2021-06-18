//Connection
var firebaseConfig = {
    apiKey: "AIzaSyBTOvD0aod-fntZ0VYbT6EAp9z1L_bqKwY",
    authDomain: "website-818ed.firebaseapp.com",
    projectId: "website-818ed",
    storageBucket: "website-818ed.appspot.com",
    messagingSenderId: "542030860652",
    appId: "1:542030860652:web:ee0bef0509915aa1da2349",
    measurementId: "G-2VWCQ9QR4S"
  };

//Init Firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();


//Start grabbing our DOM element
const submitBtn = document.querySelector('#submit');

let userMessage = document.querySelector("#userMessage");

const db = firestore.collection("feedback");

submitBtn.addEventListener('click', function(){
    let userMessageInput = userMessage.value;

    //Access the Database
    db.doc().set({
        message: userMessageInput
    }).then(function(){
        console.log("Data Saved");
       
    })
    .catch(function(error){
        console.log(error);
    });
});



submitBtn.addEventListener('click', () => {
    userMessage.value = ''

});
