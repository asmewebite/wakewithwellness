const Memberslist = document.querySelector('#members');

function renderMembers(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let email = document.createElement('span');
    let phone = document.createElement('span');
    let whatsapp = document.createElement('span');
    let department = document.createElement('span');
  


    li.setAttribute('data-id',doc.id);
    name.textContent = doc.data().name;
    email.textContent = doc.data().email;
    phone.textContent = doc.data().phone;
    whatsapp.textContent = doc.data().whatsapp;
    department.textContent = doc.data().department;

  


    li.appendChild(name);
    li.appendChild(email);
    li.appendChild(phone);
    li.appendChild(whatsapp);
    li.appendChild(department);
    
  

    Memberslist.appendChild(li);

}


db.collection('users').get().then((snapshot)=>{
    snapshot.docs.forEach(doc => {
        renderMembers(doc);
    })

})
