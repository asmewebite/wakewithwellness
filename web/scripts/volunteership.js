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
 var dataRef = firebase.database().ref('VolunteershipP');
 
 // Listen for form submit
 document.getElementById('volunteership').addEventListener('submit', submitForm);
 
 // Submit form
 function submitForm(e){
   e.preventDefault();
 
   // Get values
   var name = getInputVal('name');
   var gender = getInputVal('gender');
   var qualifications = getInputVal('qualifications');
   var email = getInputVal('email');
   var contact = getInputVal('contact');
   var whatsapp = getInputVal('whatsapp');
 
   var work = getInputVal('work');
   var address = getInputVal('address');
   var state = getInputVal('state');

   var country = getInputVal('country');

 
   var experience = getInputVal('experience');
   var checkbox = getInputVal('checkbox');
   
 
 
   // Save message
   saveData(name,gender, email, contact, whatsapp, qualifications, work, state, address, country, experience, checkbox);
 
 
  // Show alert
  document.querySelector('.alert').style.display = 'block';
 
  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);
 
  // Clear form
  document.getElementById('volunteership').reset();
 }
 
 // Function to get get form values
 function getInputVal(id){
   return document.getElementById(id).value;
 }
 
 // Save message to firebase
 function saveData(name, gender, email, contact, whatsapp, qualifications, work, state, address, country, experience, checkbox){
   var newDataRef = dataRef.push();
   newDataRef.set({
     name: name,
     gender:gender,
     email:email,
     contact:contact,
     whatsapp:whatsapp,
     qualifications:qualifications,
     work:work,
     address:address,
     state:state,
     country:country,
     experience:experience,
     checkbox:checkbox
   });
 }
 