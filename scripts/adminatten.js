const attendancelist = document.querySelector('#attendancelist');

function renderAtten(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let July1 = document.createElement('span');


    li.setAttribute('data-id',doc.id);
    name.textContent = doc.data().name;
    July1.textContent = doc.data().July1;
    


    li.appendChild(name);
    li.appendChild(July1);
  

    attendancelist.appendChild(li);

}


db.collection('attendance').get().then((snapshot)=>{
    snapshot.docs.forEach(doc => {
        renderAtten(doc);
    })

})
