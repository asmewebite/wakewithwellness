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
var dataRef = firebase.database().ref('feedback');

// Listen for form submit
document.getElementById('feedbacks').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var userMessage = getInputVal('userMessage');
  
  // Save message
  saveData(userMessage);


 // Show alert
 document.querySelector('.alert').style.display = 'block';

 // Hide alert after 3 seconds
 setTimeout(function(){
   document.querySelector('.alert').style.display = 'none';
 },3000);

 // Clear form
 document.getElementById('feedbacks').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveData(userMessage){
  var newDataRef = dataRef.push();
  newDataRef.set({
    userMessage: userMessage
  
  });
}



