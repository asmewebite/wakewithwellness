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


var uploader = document.getElementById('uploader');
  var fileButton = document.getElementById('fileButton');
  fileButton.addEventListener('change', function(e){
  var file = e.target.files[0];
  var storageRef = firebase.storage().ref('img/'+file.name);
  var task = storageRef.put(file);
  task.on('state_changed', function progress(snapshot) {
    var percentage = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
    uploader.value = percentage;

  }, function error(err) {


  },function complete() {

  });
});  

// Reference messages collection
var dataRef = firebase.database().ref('EventReg');

// Listen for form submit
document.getElementById('reg').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var email = getInputVal('Email');
  var college = getInputVal('College');
  var qualification = getInputVal('Qualification');
  var contact = getInputVal('Contact');
  var caption = getInputVal('Caption');
  var image = getInputVal('files');


  


  // Save message
  saveData(name, email, college, qualification, contact, caption, image);


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
function saveData(name, email, college, qualification, contact, caption, image){
  var newDataRef = dataRef.push();
  newDataRef.set({
    name: name,
    email:email,
    college:college,
    qualification:qualification,
    contact:contact,
    caption:caption,
    image:image
  });
}
