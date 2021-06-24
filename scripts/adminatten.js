

//First Week

const attendancelist1 = document.querySelector('#July1');

function renderAtten1(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let July1 = document.createElement('span');
  


    li.setAttribute('data-id',doc.id);
    name.textContent = doc.data().name;
    July1.textContent = doc.data().July1;
  


    li.appendChild(name);
    li.appendChild(July1);
    
  

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
  


    li.setAttribute('data-id',doc.id);
    name.textContent = doc.data().name;
    July2.textContent = doc.data().July2;
  


    li.appendChild(name);
    li.appendChild(July2);
    
  

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
  


    li.setAttribute('data-id',doc.id);
    name.textContent = doc.data().name;
    July3.textContent = doc.data().July3;
  


    li.appendChild(name);
    li.appendChild(July3);
    
  

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
  


    li.setAttribute('data-id',doc.id);
    name.textContent = doc.data().name;
    July4.textContent = doc.data().July4;
  


    li.appendChild(name);
    li.appendChild(July4);
    
  

    attendancelist4.appendChild(li);

}


db.collection('attendance').get().then((snapshot)=>{
    snapshot.docs.forEach(doc => {
        renderAtten4(doc);
    })

})
