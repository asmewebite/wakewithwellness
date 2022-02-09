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
   var contact = getInputVal('contact');
   var whatsapp = getInputVal('whatsapp');
 
   var venue = getInputVal('venue');
   var other = getInputVal('other');
   var instName = getInputVal('instName');
   var orgName = getInputVal('orgName');
   var Oaddress = getInputVal('Oaddress');
   var Eaddress = getInputVal('Eaddress');
   var Aaddress = getInputVal('Aaddress');

   var VaccineNo = getInputVal('VaccineNo');

 
   // Save message
   saveData(name, contact, whatsapp, venue, other, instName, orgName,  Oaddress,Eaddress, Aaddress, VaccineNo);
 
 
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
 function saveData(name, contact, whatsapp, venue, other, instName, orgName, Oaddress,Eaddress, Aaddress, VaccineNo){
   var newDataRef = dataRef.push();
   newDataRef.set({
     name: name,
     contact:contact,
     whatsapp:whatsapp,
     venue:venue,
     other:other,
     instName:instName,
     orgName:orgName,
     Oaddress:Oaddress,
     Eaddress:Eaddress,
     Aaddress:Aaddress,
     VaccineNo:VaccineNo,
   });
 }
 
