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
var dataRef = firebase.database().ref('feedbacks');

// Listen for form submit
document.getElementById('Feedbackform').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var Email = getInputVal('Email');
  var select1 = getInputVal('select1');
  var fill1 = getInputVal('fill1');
  var select2 = getInputVal('select2');
  var select3 = getInputVal('select3');
  var select4 = getInputVal('select4');
  var fill2 = getInputVal('fill2');
  var fill3 = getInputVal('fill3');

  


  // Save message
  saveData(name, Email, select1, fill1, select2, select3, select4, fill2, fill3 );


 // Show alert
 document.querySelector('.alert').style.display = 'block';

 // Hide alert after 3 seconds
 setTimeout(function(){
   document.querySelector('.alert').style.display = 'none';
 },3000);

 // Clear form
 document.getElementById('Feedbackform').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveData(name, Email, select1, fill1, select2, select3, select4, fill2, fill3){
  var newDataRef = dataRef.push();
  newDataRef.set({
    name: name,
    Email:Email,
    select1:select1,
    fill1:fill1,
    select2:select2,
    select3:select3,
    select4:select4,
    fill2:fill2,
    fill3:fill3,
  

  });
}
