const userDetails  = document.querySelector('.userDetails')
const editProfile  = document.querySelector('#editProfile')


function createUserCollection(user){
   firebase.firestore().collection('users')
   .doc(user.uid)
   .set({
       uid:user.uid,
       name:user.displayName,
       email:user.email,
       regno:"",
       phone:"",
       whatsapp:"",
       department:"",
       department2:"",
       college:"",
       status:"",
       blood:"",
       gender:"",
       address:"",
       state:"",
       pincode:"",
       exp:""

   })
}


async function getuserInfo(userID){
    if(userID){
      const userInfoSnap = await  firebase.firestore()
    .collection('users')
    .doc(userID)
    .get()

   const userInfo = userInfoSnap.data()
   if(userInfo){
       userDetails.innerHTML = `
       <h3>${userInfo.name}</h3>
       <h3>${userInfo.email}</h3>
       <h3>${userInfo.phone}</h3>
       `
   }    
    }else{
      userDetails.innerHTML = `
      `
    
       
    }


}



async function getuserInfoRealtime(userID){
    if(userID){
      const userdocRef = await  firebase.firestore()
        .collection('users')
        .doc(userID)
        userdocRef.onSnapshot((doc)=>{
            if(doc.exists){
                 const userInfo = doc.data()
                    if(userInfo){
                        userDetails.innerHTML = `
                        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="assets/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="assets/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="assets/css/style.css">

    <style>
    .profile-img .pic {
        height: 90%;
        width: 90%;
        -o-object-fit: cover;
        object-fit: cover;
        -o-object-position: center;
        object-position: center;
      }
    </style>
    
                        
        
       
            <div class="row">
                <div class="col-sm-7 col-6">
                    <h4 class="page-title" style="float:left;font-weight:500;">My Profile</h4>
                </div>
                <div class="col-sm-5 col-6 text-right m-b-30">
                  
                    
      
                </div>
            </div>
            <div class="card-box profile-header" style="box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.336);">
                <div class="row">
                    <div class="col-md-12">
                        <div class="profile-view">
                            <div class="profile-img-wrap" style="height:21vh;width:24vh" >
                                <div class="profile-img">
                                    <img id="proimg"  class="pic circle modal-trigger" href="#modal4" src="../assets/user.png" alt=""><br>
 
                                    <i href="#modal4" class="fa fa-camera upload-button modal-trigger">Upload</i>
                                </div>
                                
                            </div>
                            
                            <div class="profile-basic">
                                <div class="row">
                                    <div class="col-md-5">
                                        <div class="profile-info-left" style="text-align:justify">
                                            <h3 class="user-name m-t-0 mb-0">${userInfo.name}</h3>
                                            <div class="staff-id">Registration ID : <span style="font-weight:bolder;color:red">${userInfo.regno}</span></div>
                                            <h4 class="text-muted" style="margin-top:5px"><span style="font-weight: lighter;">Department I :</span><span style="font-weight:500;color:#5793D1"> ${userInfo.department}</span></h4>
                                            <h4 class="text-muted" style="margin-top:5px"><span style="font-weight: lighter;">Department II :</span><span style="font-weight:500;color:#5793D1"> ${userInfo.department2}</span></h4>
                                            
                                    
                                        </div>
                                    </div>
                                    <div class="col-md-7">
                                        <ul class="personal-info" style="text-align:left">
                                            <li>
                                                <span class="title">Phone:</span>
                                                <span class="text"><a>${userInfo.phone}</a></span>
                                            </li>
                                            <li>
                                                <span class="title">Whatsapp:</span>
                                                <span class="text"><a>${userInfo.whatsapp}</a></span>
                                            </li>
                                            <li>
                                                <span class="title">Email:</span>
                                                <span class="text"><a><span class="__cf_email__">${userInfo.email}</span></a></span>
                                            </li>
                                            
                                            <li>
                                                <span class="title">Address:</span>
                                                <span class="text">${userInfo.address}, ${userInfo.state}, ${userInfo.pincode}</span>
                                            </li>
                                            <li>
                                                <span class="title">Blood group:</span>
                                                <span class="text">${userInfo.blood}</span>
                                            </li>
                                            <li>
                                                <span class="title">Gender:</span>
                                                <span class="text">${userInfo.gender}</span>
                                            </li>
                                        </ul>
                                    </div>
                                    
                                    <button style="background-color: #5793D1;border-radius: 5px;padding: 10px;border: none;cursor: pointer;color: white;margin-left:13px" class="modal-trigger" href="#modal3">Edit details</button> 
         
                               
                               
                                    </div>
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>
            
    <div class="profile-tabs">
      <ul class="nav nav-tabs nav-tabs-bottom">
        <li class="nav-item"><a class="nav-link active" href="#about-cont" data-toggle="tab">About</a></li>
      
      </ul>
      <div class="tab-content">
        <div class="tab-pane show active" id="about-cont">
            <div class="row" style="box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);">
                <div class="col-md-12">
                    <div class="card-box" style="text-align:left">
                        <h3 class="card-title">Education Informations</h3>
                        <div class="experience-box">
                            <ul class="experience-list">
                                <li>
                                <div class="experience-user">
                                <div class="before-circle"></div>
                            </div>
                                    
                                    <div class="experience-content">
                                        <div class="timeline-content">
                                            <a class="name">${userInfo.college}</a>
                                            
                                        </div>
                                    </div>
                                </li>
                            
                               
                            </ul>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
        
        
      </div>
      <div class="card-box mb-0" style="text-align:left" style="box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);">
      <h3 class="card-title">Experience [Prior Experience in working for a NGO/CBO]</h3>
      <div class="experience-box">
          <ul class="experience-list">
              <li>
                  <div class="experience-user">
                      <div class="before-circle"></div>
                  </div>
                  <div class="experience-content">
                      <div class="timeline-content">
                          <a class="name">${userInfo.exp}</a>
                        
                      </div>
                  </div>
              </li>
             
            
          </ul>
      </div>
  </div>
   
                       
                        `
                        editProfile["name"].value = userInfo.name
                        editProfile["profileEmail"].value = userInfo.email
                        editProfile["regno"].value = userInfo.regno
                        editProfile["phoneno"].value = userInfo.phone
                        editProfile["whatsapp"].value = userInfo.whatsapp
                        editProfile["blood"].value = userInfo.blood
                        editProfile["department"].value = userInfo.department
                        editProfile["department2"].value = userInfo.department2
                        editProfile["college"].value = userInfo.college
                        editProfile["address"].value = userInfo.address
                        editProfile["state"].value = userInfo.state
                        editProfile["pincode"].value = userInfo.pincode
                        editProfile["exp"].value = userInfo.exp


                        if(firebase.auth().currentUser.photoURL){
                            document.querySelector('#proimg').src = firebase.auth().currentUser.photoURL
                        }
                      

                }    
             }
        })


    }else{
        userDetails.innerHTML = `
        `
    }
}


function updateUserProfile(e){
    e.preventDefault()
    const userDocRef =  firebase.firestore()
    .collection('users')
    .doc(firebase.auth().currentUser.uid)


    userDocRef.update({
        name:editProfile["name"].value,
        email:editProfile["profileEmail"].value,
        regno:editProfile["regno"].value,
        phone:editProfile["phoneno"].value,
        whatsapp:editProfile["whatsapp"].value,
        blood:editProfile["blood"].value,
        department:editProfile["department"].value,
        department2:editProfile["department2"].value,
        college:editProfile["college"].value,
        address:editProfile["address"].value,
        state:editProfile["state"].value,
        pincode:editProfile["pincode"].value,
        exp:editProfile["exp"].value

    })
    document.querySelector('.alert').style.display = 'block';

    // Show alert
document.querySelector('.alert').style.display = 'block';

// Hide alert after 3 seconds
setTimeout(function(){
  document.querySelector('.alert').style.display = 'none';
},3000);
  
}






var bucket = 'users';

// get elements
var uploader = document.getElementById('uploader');
var fileButton = document.getElementById('file1');



// listen for file selection
fileButton.addEventListener('change', function uploadImage(e) {

     // what happened
     console.log('file upload event', e);

     // get file
     var file = e.target.files[0];

     // create a storage ref
     const uid = firebase.auth().currentUser.uid
     const storageRef = firebase.storage().ref().child(`${bucket}/${uid}/profile`)
     // upload file
     var uploadTask = storageRef.put(file);


     // update progress bar
     uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
          function (snapshot) {
               // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
               var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
               if(progress=='100')     
               // Show alert
               document.querySelector('.success').innerHTML=`<i class="fa fa-check-circle" aria-hidden="true"></i> Updated Successfully`;
              
              // Hide alert after 10 seconds
setTimeout(function(){
    document.querySelector('.success').innerHTML=``;
  },10000);
               
               uploader.value = progress;
              
               console.log('Upload is ' + progress + '% done');
               document.querySelector('.prog').innerHTML=`${progress}%`;
            
               switch (snapshot.state) {
                    case firebase.storage.TaskState.PAUSED: // or 'paused'
                         console.log('Upload is paused');
                      
                         break;
                    case firebase.storage.TaskState.RUNNING: // or 'running'
                         console.log('Upload is running');
                         
                         break;
               }
          }, function (error) {

               // A full list of error codes is available at
               // https://firebase.google.com/docs/storage/web/handle-errors
               switch (error.code) {
                    case 'storage/unauthorized':
                         // User doesn't have permission to access the object
                         break;

                    case 'storage/canceled':
                         // User canceled the upload
                         break;

                    case 'storage/unknown':
                         // Unknown error occurred, inspect error.serverResponse
                         break;
               }
          }, 

          function () {
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                console.log('File available at', downloadURL);
                document.querySelector('#proimg').src = downloadURL
                firebase.auth().currentUser.updateProfile({
                  photoURL: downloadURL
                })
              });
          });

});






