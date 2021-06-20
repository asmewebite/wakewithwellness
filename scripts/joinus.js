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
var dataRef = firebase.database().ref('joinus');

// Listen for form submit
document.getElementById('registrations').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var Membername = getInputVal('Membername');
  var Email = getInputVal('Email');
  var Contact = getInputVal('Contact');
  var Whatsapp = getInputVal('Whatsapp');
  var Qualifications = getInputVal('Qualifications');
  var College = getInputVal('College');
  var State = getInputVal('State');
  var Pincode = getInputVal('Pincode');
  var Country = getInputVal('Country');
  var Department = getInputVal('Department');
  var Experience = getInputVal('Experience');
  var Checkbox = getInputVal('Checkbox');
  


  // Save message
  saveData(Membername, Email, Contact, Whatsapp, Qualifications, College, State, Pincode, Country, Department, Experience, Checkbox);
    
    // Show alert
 document.querySelector('.alert').style.display = 'block';

 // Hide alert after 3 seconds
 setTimeout(function(){
   document.querySelector('.alert').style.display = 'none';
 },3000);

 // Clear form
 document.getElementById('registrations').reset();

}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveData(Membername, Email, Contact, Whatsapp, Qualifications, College, State, Pincode, Country, Department, Experience, Checkbox){
  var newDataRef = dataRef.push();
  newDataRef.set({
    Membername: Membername,
    Email:Email,
    Contact:Contact,
    Whatsapp:Whatsapp,
    Qualifications:Qualifications,
    College:College,
    State:State,
    Pincode:Pincode,
    Country:Country,
    Department:Department,
    Experience:Experience,
    Checkbox:Checkbox
  });
}
