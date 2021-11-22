const Memberslist = document.querySelector('#members');

function renderMembers(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let regno = document.createElement('span');
    let email = document.createElement('span');
    let phone = document.createElement('span');
    let whatsapp = document.createElement('span');
    let department = document.createElement('span');
    let department2 = document.createElement('span');
  


    li.setAttribute('data-id',doc.id);
    name.textContent = doc.data().name;
    regno.textContent = doc.data().regno;
    email.textContent = doc.data().email;
    phone.textContent = doc.data().phone;
    whatsapp.textContent = doc.data().whatsapp;
    department.textContent = doc.data().department;
    department2.textContent = doc.data().department2;

  


    li.appendChild(name);
    li.appendChild(regno);
    li.appendChild(email);
    li.appendChild(phone);
    li.appendChild(whatsapp);
    li.appendChild(department);
    li.appendChild(department2);
    
  

    Memberslist.appendChild(li);

}


db.collection('users').orderBy('name').get().then((snapshot)=>{
    snapshot.docs.forEach(doc => {
        renderMembers(doc);
    })

})



