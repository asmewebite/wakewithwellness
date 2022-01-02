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
    let college = document.createElement('span');
    let address = document.createElement('span');
    let state = document.createElement('span');
    let pincode = document.createElement('span');
    let exp = document.createElement('span');
  


    li.setAttribute('data-id',doc.id);
    name.textContent = doc.data().name;
    regno.textContent = doc.data().regno;
    email.textContent = doc.data().email;
    phone.textContent = doc.data().phone;
    whatsapp.textContent = doc.data().whatsapp;
    department.textContent = doc.data().department;
    department2.textContent = doc.data().department2;
    college.textContent = doc.data().college;
    address.textContent = doc.data().address;
    state.textContent = doc.data().state;
    pincode.textContent = doc.data().pincode;
    exp.textContent = doc.data().exp;
  


  


    li.appendChild(name);
    li.appendChild(regno);
    li.appendChild(email);
    li.appendChild(phone);
    li.appendChild(whatsapp);
    li.appendChild(department);
    li.appendChild(department2);
    li.appendChild(college);
    li.appendChild(address);
    li.appendChild(state);
    li.appendChild(pincode);
    li.appendChild(exp);
    
  

    Memberslist.appendChild(li);

}


db.collection('users').orderBy('name').get().then((snapshot)=>{
    snapshot.docs.forEach(doc => {
        renderMembers(doc);
    })

})



