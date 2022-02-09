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
 var dataRef = firebase.database().ref('Vaccine22');
 
 // Listen for form submit
 document.getElementById('vaccinesForm').addEventListener('submit', submitForm);
 
 // Submit form
 function submitForm(e){
   e.preventDefault();
 
   // Get values
   var name = getInputVal('name');
   var email = getInputVal('email');
   var contact = getInputVal('contact');
   var whatsapp = getInputVal('whatsapp');
 
   var venue = getInputVal('venue');
   var other = getInputVal('other');
   var instName = getInputVal('instName');

   var VaccineNo = getInputVal('VaccineNo');

 
   // Save message
   saveData(name, email, contact, whatsapp, venue, other, instName, VaccineNo);
 
 
  // Show alert
  document.querySelector('.alert').style.display = 'block';
 
  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);
 
  // Clear form
  document.getElementById('vaccinesForm').reset();
 }
 
 // Function to get get form values
 function getInputVal(id){
   return document.getElementById(id).value;
 }
 
 // Save message to firebase
 function saveData(name, email, contact, whatsapp, venue, other, instName, VaccineNo){
   var newDataRef = dataRef.push();
   newDataRef.set({
     name: name,
     email:email,
     contact:contact,
     whatsapp:whatsapp,
     venue:venue,
     other:other,
     instName:instName,
     VaccineNo:VaccineNo,
   });
 }
 