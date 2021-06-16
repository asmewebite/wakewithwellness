var database = firebase.database();



function writeUserData(){
	var message = document.getElementById('message').value;
	database.ref('message/').push().set({
		message : message,
	});
}