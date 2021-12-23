

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


