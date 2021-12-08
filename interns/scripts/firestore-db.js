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
   
       college:"",
       status:"",
       taskno:"",
       task:"",
       labeldate:"",
       date:""
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
        <div class="container">
      
        <h4 style="color: yellow;margin-top:120px">'Interns login only'</h4></div>
        <div class="container" style="margin-top:50px">
          
          <p style="color:white">Be a part of this welfare operation by undertaking the pledge to serve people and generation.<br>
          Looking forward towards the growth of an incredible community</p>
          <p></p>
          
  </div>
  <div class="container" style="width:200px;background-color:#5793D1;padding:8px;border-radius: 8px;margin-top:70px;cursor: pointer">
  <a class="modal-trigger" href="#modal2" id="loginli" style="color:white;padding:8px;width:200px">Login</a></div>
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
                        <div class="userdee" style="background-color:#5793D1;text-align: left;width: 100%;padding: 10px">
                          <div class="collection-item"><h5 style="color:white">${userInfo.name}</h5></div>
                          <div class="collection-item"  style="color:rgb(219, 219, 219)"> E-mail : <span style="font-weight:bolder"> ${userInfo.email}</span><br>
    
                          Contact no : <span style="font-weight:bolder"> ${userInfo.phone}</span><br>
                          Whatsapp no : <span style="font-weight:bolder"> ${userInfo.whatsapp}</span><br>
                          Department : <span style="font-weight:bolder"> ${userInfo.department}</span> ;<br>
                      
                          College : <span style="font-weight:bolder"> ${userInfo.college}</span></div>
                          
                          
                        </div>
                        <div style="color:white;text-align:left;margin-left:10px">
                          Leave status : ${userInfo.status}</div>


                        <div class="container-fluid" style="background-color: white;padding:3px;margin-top:5px">
                        <h6 style="color: #5793D1;font-weight:500;padding:5px;text-align: center;">Notifications</h6>
                       <div style="text-align:left;padding-left:5px;padding-right:5px">
                       
                        <ol>
                        
                       <li> Attendence to be posted before 12th December 2021 without fail</li>
 
                    
</ol>
                        </div>
                        </div>

                        <div style="padding:10px;background-color:gainsboro;border-style: double;border-color: black;font-size:16px;">
                        ${userInfo.taskno} : <span style="font-weight:bolder"> ${userInfo.task}</span><br>
                        <div style="font-size:12px;text-align:right;color:red;margin-top:7px">
                        ${userInfo.labeldate} <span style="font-weight:bolder"> ${userInfo.date}</span><br>
                        </div>
                        </div>




                        <div class="container-fluid" style="padding: 10px;margin-top: 30px;text-align: center;">
                        <button class="logged-in" onclick="location.href='attendanceform.html'" style="color: #f2f2f2;background-color: rgb(4, 206, 64);cursor: pointer;padding: 10px;border-radius: 8px;text-align: center;box-shadow: 1px 3px 5px rgba(0,0,0,0.1);width: 100%;height: 60px;margin-top: 6px;">Attendance</button>
                        <button class="logged-in" onclick="location.href='message.html'" style="color:white;background-color: rgb(73, 73, 73);cursor: pointer;padding: 10px;border-radius: 8px;text-align: center;box-shadow: 1px 3px 5px rgba(0,0,0,0.1);width: 100%;height: 50px;margin-top:5px">Suggestions</button>
                        <button class="logged-in" onclick="location.href='leave.html'" style="margin-top:2px;color:white;background-color: rgb(73, 73, 73);cursor: pointer;padding: 10px;border-radius: 8px;text-align: center;box-shadow: 1px 3px 5px rgba(0,0,0,0.1);width: 100%;height: 50px;margin-top:5px">Leave Request</button>
                        </div>
                        `
                        editProfile["name"].value = userInfo.name
                        editProfile["profileEmail"].value = userInfo.email
                        editProfile["phoneno"].value = userInfo.phone
                        editProfile["whatsapp"].value = userInfo.whatsapp
                        editProfile["college"].value = userInfo.college
                        editProfile["department"].value = userInfo.department
                        editProfile["status"].value = userInfo.status

                       


                }    
             }
        })


    }else{
        userDetails.innerHTML = `
        <div class="container">
      
        <h4 style="color: yellow;margin-top:120px;font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;"">'Interns login only'</h4></div>
        <div class="container" style="margin-top:50px">
          
          <p style="color:white">Be a part of this welfare operation by undertaking the pledge to serve people and generation.<br>
          Looking forward towards the growth of an incredible community</p>
          <p></p>
          
  </div>
  <div class="container" style="width:200px;background-color:#5793D1;padding:8px;border-radius: 8px;margin-top:70px;cursor: pointer">
  <a class="modal-trigger" href="#modal2" id="loginli" style="color:white;padding:8px;width:200px">Login</a></div>
        
       
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
        phone:editProfile["phoneno"].value,
        whatsapp:editProfile["whatsapp"].value,
        college:editProfile["college"].value,
        department:editProfile["department"].value,
        status:editProfile["status"].value

    })

    M.Modal.getInstance(myModel[2]).close()
}





async function allUserDetails(){
  document.getElementById('table').style.display='table'
  const userRef = await firebase.firestore().collection('users').get()  
  userRef.docs.forEach(doc=>{
           const info =   doc.data()
           document.getElementById('tbody').innerHTML += `
           <tr>
            <td>${info.name}</td>
            <td>${info.email}</td>
            <td>${info.phone}</td>
            <td>${info.whatsapp}</td>
            <td>${info.experience}</td>
            <td>${info.college}</td>
            <td>${info.status}</td>
          </tr>
           `
    })
 
}




//Attendance


function updateattendance(event){
  event.preventDefault()
  var Dec1 = document.getElementById('attend').value
  var Dec1f = document.getElementById('work').value
  var userRef = firebase.firestore().collection('attendance').doc(firebase.auth().currentUser.uid);

  var setWithMerge = userRef.set({
    Dec1:Dec1,
    Dec1f:Dec1f

  },{ merge: true}).then(()=>{
    document.querySelector('.alert').style.display = 'block';

     // Show alert
 document.querySelector('.alert').style.display = 'block';

 // Hide alert after 3 seconds
 setTimeout(function(){
   document.querySelector('.alert').style.display = 'none';
 },5000);

 // Clear form
 document.getElementById('attendanceform').reset();

  });
}



//suggestions

function sendMessage(event){
  event.preventDefault()
  var message = document.getElementById('msg').value
  var name = document.getElementById('name').value
  var userRef = firebase.firestore().collection('internmsg').add({
    message:message,
    name:name,
    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  }).then(()=>{
    document.querySelector('.alert').style.display = 'block';

  });
}
