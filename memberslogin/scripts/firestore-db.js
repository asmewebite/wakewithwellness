const userDetails  = document.querySelector('.userDetails')
const editProfile  = document.querySelector('#editProfile')

function createUserCollection(user){
   firebase.firestore().collection('users')
   .doc(user.uid)
   .set({
       uid:user.uid,
       name:user.displayName,
       email:user.email,
       phone:"",
       whatsapp:"",
       department:"",
       college:""
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
      
        <div class="container">

        <h5 style="color: red;font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">Page Under Construction</h5>
      
        <h4 style="color: yellow;margin-top:150px">'Member login only'</h4></div>

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
                          <div class="collection-item"  style="color:rgb(219, 219, 219)"> E mail:  ${userInfo.email}<br>
                          Contact no:  ${userInfo.phone}<br>
                          Whatsapp no:  ${userInfo.whatsapp}<br>
                          Department:  ${userInfo.department}<br>
                          College:  ${userInfo.college}</div>
                        </div>

                        <div class="container">
      <div>
          <h5 style="color: white;font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">Wake With Wellness</h5>
          <p style="color: rgb(196, 194, 194);text-align: justify;">Wake With Wellness is a community based organization registered under 
            UNITED NATIONS to exercise good actions for the rehabilitation of communities regarding health and social 
            awareness without ascertaining the foundations of legal norms. We’ll create health awareness campaigns that will include posters, 
            content creation, interactive sessions and imparting information that can increase the awareness of 
            people in the country about palliative and health care.</p>

  </div>
  </div>



  <div class="d-flex justify-content-around" style="padding: 10px;">
    <ul id="nav-mobile" class="center">
      <a class="logged-in" href="feedbacks.html" style="margin-right: 20px;color: white;padding: 10px;background-color: #5793D1; border-radius: 8px;">Suggestions
      </a>

      <a class="logged-in" href="attendanceform.html" style="margin-right: 20px;color: white;padding: 10px;background-color: #5793D1; border-radius: 8px;">Attendance
      </a>

      <a class="logged-in" href="memberagreement.html" style="padding: 10px;color: white;background-color: #5793D1; border-radius: 8px;">Agreement
      </a>
      
    </ul>
  </div>
                        `
                        editProfile["name"].value = userInfo.name
                        editProfile["profileEmail"].value = userInfo.email
                        editProfile["phoneno"].value = userInfo.phone
                        editProfile["whatsapp"].value = userInfo.whatsapp
                        editProfile["college"].value = userInfo.college
                        editProfile["department"].value = userInfo.department

                       


                }    
             }
        })


    }else{
        userDetails.innerHTML = `
        <div class="container">
      
        <div class="container">

        <h5 style="color: red;font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">Page Under Construction</h5>
      
        <h4 style="color: yellow;margin-top:150px">'Member login only'</h4></div>

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
        department:editProfile["department"].value

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
          </tr>
           `
    })
 
  
  



}
