// Reference messages collection
var dataRef = firebase.database().ref('leaverequest');

// Listen for form submit
document.getElementById('leaveform').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var reason = getInputVal('reason');
  var from = getInputVal('from');
  var to = getInputVal('to');


  


  // Save message
  saveData(name, reason, from, to);


 // Show alert
 document.querySelector('.alert').style.display = 'block';

 // Hide alert after 3 seconds
 setTimeout(function(){
   document.querySelector('.alert').style.display = 'none';
 },3000);

 // Clear form
 document.getElementById('leaveform').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveData(name, reason, from, to,){
  var newDataRef = dataRef.push();
  newDataRef.set({
    name: name,
    reason:reason,
    from:from,
    to:to
  });
}
