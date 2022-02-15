
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
   var blood = getInputVal('blood');
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
   saveData(name,gender, email, contact, whatsapp, qualifications,blood, work, state, address, country, experience, checkbox);
 
 
  // Show alert
  document.querySelector('.alert').style.display = 'block';
  document.querySelector('#volunteership').style.display = 'none';

  // Clear form
  document.getElementById('volunteership').reset();
 }
 
 // Function to get get form values
 function getInputVal(id){
   return document.getElementById(id).value;
 }
 
 // Save message to firebase
 function saveData(name, gender, email, contact, whatsapp, qualifications,blood, work, state, address, country, experience, checkbox){
   var newDataRef = dataRef.push();
   newDataRef.set({
     name: name,
     gender:gender,
     email:email,
     contact:contact,
     whatsapp:whatsapp,
     qualifications:qualifications,
     blood:blood,
     work:work,
     address:address,
     state:state,
     country:country,
     experience:experience,
     checkbox:checkbox
   });
 }
 
