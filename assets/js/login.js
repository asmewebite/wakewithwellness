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


  //signIN function
  function  signIn(){
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
    
  }


  //active user to homepage
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      var email = user.email;
      window.location = "adminhome.html"
    
      window.alert("Login Successfull "+email);
  

    }else{
      window.alert("No Active user Found")
    }
  })