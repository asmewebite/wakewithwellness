

//First Week

const attendancelist1 = document.querySelector('#July1');

function renderAtten1(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let July1 = document.createElement('span');
    let July1f = document.createElement('span');
  


    li.setAttribute('data-id',doc.id);
    name.textContent = doc.data().name;
    July1.textContent = doc.data().July1;
    July1f.textContent = doc.data().July1f;
  


    li.appendChild(name);
    li.appendChild(July1);
    li.appendChild(July1f);
    
  

    attendancelist1.appendChild(li);

}


db.collection('attendance').get().then((snapshot)=>{
    snapshot.docs.forEach(doc => {
        renderAtten1(doc);
    })

})


//Second Week


const attendancelist2 = document.querySelector('#July2');

function renderAtten2(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let July2 = document.createElement('span');
    let July2f = document.createElement('span');
  


    li.setAttribute('data-id',doc.id);
    name.textContent = doc.data().name;
    July2.textContent = doc.data().July2;
    July2f.textContent = doc.data().July2f;
  


    li.appendChild(name);
    li.appendChild(July2);
    li.appendChild(July2f);
    
  

    attendancelist2.appendChild(li);

}


db.collection('attendance').get().then((snapshot)=>{
    snapshot.docs.forEach(doc => {
        renderAtten2(doc);
    })

})


//Third Week

const attendancelist3 = document.querySelector('#July3');

function renderAtten3(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let July3 = document.createElement('span');
    let July3f = document.createElement('span');
  


    li.setAttribute('data-id',doc.id);
    name.textContent = doc.data().name;
    July3.textContent = doc.data().July3;
    July3f.textContent = doc.data().July3f;
  


    li.appendChild(name);
    li.appendChild(July3);
    li.appendChild(July3f);
    
  

    attendancelist3.appendChild(li);

}


db.collection('attendance').get().then((snapshot)=>{
    snapshot.docs.forEach(doc => {
        renderAtten3(doc);
    })

})



//Fourth Week


const attendancelist4 = document.querySelector('#July4');

function renderAtten4(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let July4 = document.createElement('span');
    let July4f = document.createElement('span');
  


    li.setAttribute('data-id',doc.id);
    name.textContent = doc.data().name;
    July4.textContent = doc.data().July4;
    July4f.textContent = doc.data().July4f;
  


    li.appendChild(name);
    li.appendChild(July4);
    li.appendChild(July4f);
    
  

    attendancelist4.appendChild(li);

}


db.collection('attendance').get().then((snapshot)=>{
    snapshot.docs.forEach(doc => {
        renderAtten4(doc);
    })

})
