var firebaseConfig = {
    apiKey: "AIzaSyDoiXHxMG_vZPHz0eeJj5s661xhfU-Y4_4",
    authDomain: "members-76725.firebaseapp.com",
    projectId: "members-76725",
    storageBucket: "members-76725.appspot.com",
    messagingSenderId: "734645197873",
    appId: "1:734645197873:web:808127fdb4d643d4d24910",
    measurementId: "G-7LYZ3R48GT"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// Reference messages collection
var dataRef = firebase.database().ref('edtprofile');

// Listen for form submit
document.getElementById('edit').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var email = getInputVal('Email');
  var contact = getInputVal('Contact');
  var whatsapp = getInputVal('Whatsapp');
  var college = getInputVal('College');

  


  // Save message
  saveData(name, email, contact, whatsapp,college);


 // Show alert
 document.querySelector('.alert').style.display = 'block';


 // Clear form
 document.getElementById('edit').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveData(name, email, contact, whatsapp,college){
  var newDataRef = dataRef.push();
  newDataRef.set({
    name: name,
    email:email,
    contact:contact,
    whatsapp:whatsapp,
    college:college
  });
}
