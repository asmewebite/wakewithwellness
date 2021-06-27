const leavelist = document.querySelector('#leavestatus');

function renderLeave(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let to = document.createElement('span');
    let from = document.createElement('span');
    let status = document.createElement('span');
  


    li.setAttribute('data-id',doc.id);
    name.textContent = doc.data().name;
    to.textContent = doc.data().to;
    from.textContent = doc.data().from;
    status.textContent = doc.data().status;

  


    li.appendChild(name);
    li.appendChild(to);
    li.appendChild(from);
    li.appendChild(status);
    
  

    leavelist.appendChild(li);

}


db.collection('leave').get().then((snapshot)=>{
    snapshot.docs.forEach(doc => {
        renderLeave(doc);
    })

})