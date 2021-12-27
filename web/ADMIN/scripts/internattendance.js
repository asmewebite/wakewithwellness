

// 06/12/21-12/12/21

const attendanceDec1 = document.querySelector('#Dec1');

function renderDec1(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let dept = document.createElement('span');
    let Dec1 = document.createElement('span');
    let Dec1f = document.createElement('span');
  


    li.setAttribute('data-id',doc.id);
    name.textContent = doc.data().name;
    dept.textContent = doc.data().dept;
    Dec1.textContent = doc.data().Dec1;
    Dec1f.textContent = doc.data().Dec1f;
  


    li.appendChild(name);
    li.appendChild(dept);
    li.appendChild(Dec1);
    li.appendChild(Dec1f);
    
  

    attendanceDec1.appendChild(li);

}


db.collection('attendance').get().then((snapshot)=>{
    snapshot.docs.forEach(doc => {
        renderDec1(doc);
    })

})




// 12/12/21-19/12/21

const attendanceDec2 = document.querySelector('#Dec2');

function renderDec2(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let dept = document.createElement('span');
    let Dec2 = document.createElement('span');
    let Dec2f = document.createElement('span');
  


    li.setAttribute('data-id',doc.id);
    name.textContent = doc.data().name;
    dept.textContent = doc.data().dept;
    Dec2.textContent = doc.data().Dec2;
    Dec2f.textContent = doc.data().Dec2f;
  


    li.appendChild(name);
    li.appendChild(dept);
    li.appendChild(Dec2);
    li.appendChild(Dec2f);
    
  

    attendanceDec2.appendChild(li);

}


db.collection('attendance').get().then((snapshot)=>{
    snapshot.docs.forEach(doc => {
        renderDec2(doc);
    })

})




// 20/12/21-26/12/21

const attendanceDec3 = document.querySelector('#Dec3');

function renderDec3(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let dept = document.createElement('span');
    let Dec3 = document.createElement('span');
    let Dec3f = document.createElement('span');
  


    li.setAttribute('data-id',doc.id);
    name.textContent = doc.data().name;
    dept.textContent = doc.data().dept;
    Dec3.textContent = doc.data().Dec3;
    Dec3f.textContent = doc.data().Dec3f;
  


    li.appendChild(name);
    li.appendChild(dept);
    li.appendChild(Dec3);
    li.appendChild(Dec3f);
    
  

    attendanceDec3.appendChild(li);

}


db.collection('attendance').get().then((snapshot)=>{
    snapshot.docs.forEach(doc => {
        renderDec3(doc);
    })

})




// 27/12/21-2/12/21

const attendanceDec4 = document.querySelector('#Dec4');

function renderDec4(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let dept = document.createElement('span');
    let Dec4 = document.createElement('span');
    let Dec4f = document.createElement('span');
  


    li.setAttribute('data-id',doc.id);
    name.textContent = doc.data().name;
    dept.textContent = doc.data().dept;
    Dec4.textContent = doc.data().Dec4;
    Dec4f.textContent = doc.data().Dec4f;
  


    li.appendChild(name);
    li.appendChild(dept);
    li.appendChild(Dec4);
    li.appendChild(Dec4f);
    
  

    attendanceDec4.appendChild(li);

}


db.collection('attendance').get().then((snapshot)=>{
    snapshot.docs.forEach(doc => {
        renderDec4(doc);
    })

})


