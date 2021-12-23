const Memberslist = document.querySelector('#members');

function renderMembers(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let message = document.createElement('span');
   
  


    li.setAttribute('data-id',doc.id);
    name.textContent = doc.data().name;
    message.textContent = doc.data().message;
    

  


    li.appendChild(name);
    li.appendChild(message);

    
  

    Memberslist.appendChild(li);

}





db.collection('membermsg').orderBy('timestamp').get().then((snapshot)=>{
    snapshot.docs.forEach(doc => {
        renderMembers(doc);
    })

})