var firebaseConfig = {
  apiKey: "AIzaSyDoiXHxMG_vZPHz0eeJj5s661xhfU-Y4_4",
  authDomain: "members-76725.firebaseapp.com",
  databaseURL: "https://members-76725-default-rtdb.firebaseio.com",
  projectId: "members-76725",
  storageBucket: "members-76725.appspot.com",
  messagingSenderId: "734645197873",
  appId: "1:734645197873:web:808127fdb4d643d4d24910",
  measurementId: "G-7LYZ3R48GT"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const rootRef = firebase.database().ref();

const commentsRef = rootRef.child('comments');

document.getElementById('btnSubmitComment').addEventListener('click', function () {

  var newcomment = document.getElementById('txComment').value.replace(/\n/g, "<br>");

  var newPostRef = commentsRef.push();


  newPostRef.set({
    name: document.getElementById('tbName').value.trim(),
    comment: newcomment.trim(),
    frompage: location.pathname,
    when: firebase.database.ServerValue.TIMESTAMP
  });
});



function showpastcomments() {
        var showat = document.getElementById('pastcomments');
        //Get comments whose from page equals this page's pathname.
        var commentsRef = firebase.database().ref('comments/').orderByChild('frompage').equalTo(location.pathname);
        commentsRef.once('value', function (snapshot) {
            snapshot.forEach(function (itemSnapshot) {
                //Get the object for one snapshot
                var itemData = itemSnapshot.val();
                var comment = itemData.comment;
                var name = itemData.name;
                var when = new Date(itemData.when).toLocaleDateString("en-us");
                showat.innerHTML += "<li>" + comment + "<span> -- " + name + " (" + when +
                    ")</span></li>";
            })
        })
    }
    //Called when page first opens and also after Submit button click to show all comments for this page.
    showpastcomments()