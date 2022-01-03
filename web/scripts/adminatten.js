

//First Week

const attendancelist1 = document.querySelector('#Jan1');

function renderAtten1(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let dept = document.createElement('span');
    let Jan1 = document.createElement('span');
    let Jan1f = document.createElement('span');
  


    li.setAttribute('data-id',doc.id);
    name.textContent = doc.data().name;
    dept.textContent = doc.data().dept;
    Jan1.textContent = doc.data().Jan1;
    Jan1f.textContent = doc.data().Jan1f;
  


    li.appendChild(name);
    li.appendChild(dept);
    li.appendChild(Jan1);
    li.appendChild(Jan1f);
    
  

    attendancelist1.appendChild(li);

}


db.collection('attendance').get().then((snapshot)=>{
    snapshot.docs.forEach(doc => {
        renderAtten1(doc);
    })

})


//Second Week


const attendancelist2 = document.querySelector('#Jan2');

function renderAtten2(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let dept = document.createElement('span');
    let Jan2 = document.createElement('span');
    let Jan2f = document.createElement('span');
  


    li.setAttribute('data-id',doc.id);
    name.textContent = doc.data().name;
    dept.textContent = doc.data().dept;
    Jan2.textContent = doc.data().Jan2;
    Jan2f.textContent = doc.data().Jan2f;
  


    li.appendChild(name);
    li.appendChild(dept);
    li.appendChild(Jan2);
    li.appendChild(Jan2f);
    
  

    attendancelist2.appendChild(li);

}


db.collection('attendance').get().then((snapshot)=>{
    snapshot.docs.forEach(doc => {
        renderAtten2(doc);
    })

})





//Feb 1


const attendanceFeb1 = document.querySelector('#Feb1');

function renderFeb1(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let dept = document.createElement('span');
    let Feb1 = document.createElement('span');
    let Feb1f = document.createElement('span');
  


    li.setAttribute('data-id',doc.id);
    name.textContent = doc.data().name;
    dept.textContent = doc.data().dept;
    Feb1.textContent = doc.data().Feb1;
    Feb1f.textContent = doc.data().Feb1f;
  


    li.appendChild(name);
    li.appendChild(dept);
    li.appendChild(Feb1);
    li.appendChild(Feb1f);
    
  

    attendanceFeb1.appendChild(li);

}


db.collection('attendance').get().then((snapshot)=>{
    snapshot.docs.forEach(doc => {
        renderFeb1(doc);
    })

})





//Feb 2


const attendanceFeb2 = document.querySelector('#Feb2');

function renderFeb2(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let dept = document.createElement('span');
    let Feb2 = document.createElement('span');
    let Feb2f = document.createElement('span');
  


    li.setAttribute('data-id',doc.id);
    name.textContent = doc.data().name;
    dept.textContent = doc.data().dept;
    Feb2.textContent = doc.data().Feb2;
    Feb2f.textContent = doc.data().Feb2f;
  


    li.appendChild(name);
    li.appendChild(dept);
    li.appendChild(Feb2);
    li.appendChild(Feb2f);
    
  

    attendanceFeb2.appendChild(li);

}


db.collection('attendance').get().then((snapshot)=>{
    snapshot.docs.forEach(doc => {
        renderFeb2(doc);
    })

})



