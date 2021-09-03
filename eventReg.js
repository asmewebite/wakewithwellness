// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAF1DAJ7WFv8-BLO6NuDavi2S4ZdINW3Jw",
  authDomain: "wakewithwellness-fcdb9.firebaseapp.com",
  databaseURL: "https://wakewithwellness-fcdb9-default-rtdb.firebaseio.com",
  projectId: "wakewithwellness-fcdb9",
  storageBucket: "wakewithwellness-fcdb9.appspot.com",
  messagingSenderId: "809455887855",
  appId: "1:809455887855:web:e756652111b39913b3c21a",
  measurementId: "G-4SKG6CT2GC"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Reference messages collection
var dataRef = firebase.database().ref('Nutritions');

// Listen for form submit
document.getElementById('reg').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var email = getInputVal('Email');
  var contact = getInputVal('Contact');
  var whatsapp = getInputVal('Whatsapp');



  


// Save message
saveData(name, email, contact, whatsapp);

document.querySelector('.alert').style.display = 'block';

     // Show alert
 document.querySelector('.alert').style.display = 'block';

 // Hide alert after 3 seconds
 setTimeout(function(){
   document.querySelector('.alert').style.display = 'none';
 },3000);

 // Clear form
 document.getElementById('reg').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveData(name, email, contact, whatsapp){
  var newDataRef = dataRef.push();
  newDataRef.set({
    name: name,
    email:email,
    contact:contact,
    whatsapp,whatsapp
   
  });
}

