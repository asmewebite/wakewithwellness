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


const auth =  firebase.auth();



  //signOut

  function signOut(){
    auth.signOut();
    alert("SignOut Successfully from System");
    if(user){
      setTimeout(function(){
      window.alert("Login Successfull "+email);
      window.location.replace("login.html");
    },1000)
    }
  }

