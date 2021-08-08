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


//function to save file
function uploadFile(){
      
  // Created a Storage Reference with root dir
  var storageRef = firebase.storage('submissions').ref('url');
  // Get the file from DOM
  var file = document.getElementById("files").files[0];
  console.log(file);
  
  //dynamically set reference to the file name
  var thisRef = storageRef.child(file.name);

  //put request upload file to firebase storage
  thisRef.put(file).then(function(snapshot) {
     alert("File Uploaded")
     console.log('Uploaded a blob or file!');
  });
}




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
  var contact = getInputVal('Contact');
  var image = getInputVal('files');


  


  // Save message
  saveData(name, email, contact,image);


 // Show alert
 document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },4000);


 // Clear form
 document.getElementById('reg').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveData(name, email, contact,image){
  var newDataRef = dataRef.push();
  newDataRef.set({
    name: name,
    email:email,
    contact:contact,
    image:image
  });
}
