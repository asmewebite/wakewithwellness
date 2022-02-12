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
 
 // Reference messages collection
 var dataRef = firebase.database().ref('InstaLive');
 
 // Listen for form submit
 document.getElementById('instalive').addEventListener('submit', submitForm);
 
 // Submit form
 function submitForm(e){
   e.preventDefault();
 
   // Get values
   var name = getInputVal('name');
   var email = getInputVal('email');
   var contact = getInputVal('contact');
   var Q1 = getInputVal('Q1');
   var Q2 = getInputVal('Q2');
   var yes = getInputVal('yes');
   var Q3 = getInputVal('Q3');

  

 
   // Save message
   saveData(name,email, contact, Q1, Q2, yes, Q3);
 
 
  // Show alert
  document.querySelector('.alert').style.display = 'block';
  document.querySelector('#instalive').style.display = 'none';

  // Clear form
  document.getElementById('instalive').reset();
 }
 
 // Function to get get form values
 function getInputVal(id){
   return document.getElementById(id).value;
 }
 
 // Save message to firebase
 function saveData(name,email, contact, Q1, Q2, yes, Q3){
   var newDataRef = dataRef.push();
   newDataRef.set({
     name: name,
     email:email,
     contact:contact,
     Q1:Q1,
     Q2:Q2,
     yes:yes,
     Q3:Q3,
  
   });
 }
 