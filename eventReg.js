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



var files = [];
document.getElementById("files").addEventListener("change", function(e) {
  files = e.target.files;
  for (let i = 0; i < files.length; i++) {
    console.log(files[i]);
  }
});

document.getElementById("send").addEventListener("click", function() {
  //checks if files are selected
  if (files.length != 0) {
    //Loops through all the selected files
    for (let i = 0; i < files.length; i++) {
      //create a storage reference
      var storage = firebase.storage().ref(files[i].name);

      //upload file
      var upload = storage.put(files[i]);

      //update progress bar
      upload.on(
        "state_changed",
        function progress(snapshot) {
          var percentage =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            document.getElementById("progress").style.display = 'block';
          document.getElementById("progress").value = percentage;
          document.getElementById("progresstext").style.display = 'block';
        },

        function error() {
          alert("error uploading file");
        },

        function complete() {
          document.getElementById(
            "uploading"
          ).innerHTML += `${files[i].name} uploaded successfully<br />`;
          document.getElementById("progresstext").style.display = 'none';
        }
      );
    }
  } else {
    alert("No file chosen");
  }
});

function getFileUrl(filename) {
  //create a storage reference
  var storage = firebase.storage().ref(filename);

  //get file url
  storage
    .getDownloadURL()
    .then(function(url) {
      console.log(url);
    })
    .catch(function(error) {
      console.log("error encountered");
    });
}
