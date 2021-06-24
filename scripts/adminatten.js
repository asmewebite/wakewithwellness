const attendancelist = document.querySelector('#attendancelist');

function renderAtten(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let July = document.createElement('span');


    li.setAttribute('data-id',doc.id);
    name.textContent = doc.data().name;
    July.textContent = doc.data().July;


    li.appendChild(name);
    li.appendChild(July);
  

    attendancelist.appendChild(li);

}


db.collection('attendance').get().then((snapshot)=>{
    snapshot.docs.forEach(doc => {
        renderAtten(doc);
    })

})