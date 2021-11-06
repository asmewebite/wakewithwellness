

//First Week

const attendancelist1 = document.querySelector('#July1');

function renderAtten1(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let dept = document.createElement('span');
    let July1 = document.createElement('span');
    let July1f = document.createElement('span');
  


    li.setAttribute('data-id',doc.id);
    name.textContent = doc.data().name;
    dept.textContent = doc.data().dept;
    July1.textContent = doc.data().July1;
    July1f.textContent = doc.data().July1f;
  


    li.appendChild(name);
    li.appendChild(dept);
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
    let dept = document.createElement('span');
    let July2 = document.createElement('span');
    let July2f = document.createElement('span');
  


    li.setAttribute('data-id',doc.id);
    name.textContent = doc.data().name;
    dept.textContent = doc.data().dept;
    July2.textContent = doc.data().July2;
    July2f.textContent = doc.data().July2f;
  


    li.appendChild(name);
    li.appendChild(dept);
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
    let dept = document.createElement('span');
    let July3 = document.createElement('span');
    let July3f = document.createElement('span');
  


    li.setAttribute('data-id',doc.id);
    name.textContent = doc.data().name;
    dept.textContent = doc.data().dept;
    July3.textContent = doc.data().July3;
    July3f.textContent = doc.data().July3f;
  


    li.appendChild(name);
    li.appendChild(dept);
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
    let dept = document.createElement('span');
    let July4 = document.createElement('span');
    let July4f = document.createElement('span');
  


    li.setAttribute('data-id',doc.id);
    name.textContent = doc.data().name;
    dept.textContent = doc.data().dept;
    July4.textContent = doc.data().July4;
    July4f.textContent = doc.data().July4f;
  


    li.appendChild(name);
    li.appendChild(dept);
    li.appendChild(July4);
    li.appendChild(July4f);
    
  

    attendancelist4.appendChild(li);

}


db.collection('attendance').get().then((snapshot)=>{
    snapshot.docs.forEach(doc => {
        renderAtten4(doc);
    })

})









//August 1


const attendanceAug1 = document.querySelector('#August1');

function renderAug1(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let dept = document.createElement('span');
    let Aug1 = document.createElement('span');
    let Aug1f = document.createElement('span');
  


    li.setAttribute('data-id',doc.id);
    name.textContent = doc.data().name;
    dept.textContent = doc.data().dept;
    Aug1.textContent = doc.data().Aug1;
    Aug1f.textContent = doc.data().Aug1f;
  


    li.appendChild(name);
    li.appendChild(dept);
    li.appendChild(Aug1);
    li.appendChild(Aug1f);
    
  

    attendanceAug1.appendChild(li);

}


db.collection('attendance').get().then((snapshot)=>{
    snapshot.docs.forEach(doc => {
        renderAug1(doc);
    })

})





//August 2


const attendanceAug2 = document.querySelector('#August2');

function renderAug2(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let dept = document.createElement('span');
    let Aug2 = document.createElement('span');
    let Aug2f = document.createElement('span');
  


    li.setAttribute('data-id',doc.id);
    name.textContent = doc.data().name;
    dept.textContent = doc.data().dept;
    Aug2.textContent = doc.data().Aug2;
    Aug2f.textContent = doc.data().Aug2f;
  


    li.appendChild(name);
    li.appendChild(dept);
    li.appendChild(Aug2);
    li.appendChild(Aug2f);
    
  

    attendanceAug2.appendChild(li);

}


db.collection('attendance').get().then((snapshot)=>{
    snapshot.docs.forEach(doc => {
        renderAug2(doc);
    })

})





//September 1


const attendanceSept1 = document.querySelector('#September1');

function renderSept1(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let dept = document.createElement('span');
    let Sept1 = document.createElement('span');
    let Sept1f = document.createElement('span');
  


    li.setAttribute('data-id',doc.id);
    name.textContent = doc.data().name;
    dept.textContent = doc.data().dept;
    Sept1.textContent = doc.data().Sept1;
    Sept1f.textContent = doc.data().Sept1f;
  


    li.appendChild(name);
    li.appendChild(dept);
    li.appendChild(Sept1);
    li.appendChild(Sept1f);
    
  

    attendanceSept1.appendChild(li);

}


db.collection('attendance').get().then((snapshot)=>{
    snapshot.docs.forEach(doc => {
        renderSept1(doc);
    })

})





//September 2


const attendanceSept2 = document.querySelector('#September2');

function renderSept2(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let dept = document.createElement('span');
    let Sept2 = document.createElement('span');
    let Sept2f = document.createElement('span');
  


    li.setAttribute('data-id',doc.id);
    name.textContent = doc.data().name;
    dept.textContent = doc.data().dept;
    Sept2.textContent = doc.data().Sept2;
    Sept2f.textContent = doc.data().Sept2f;
  


    li.appendChild(name);
    li.appendChild(dept);
    li.appendChild(Sept2);
    li.appendChild(Sept2f);
    
  

    attendanceSept2.appendChild(li);

}


db.collection('attendance').get().then((snapshot)=>{
    snapshot.docs.forEach(doc => {
        renderSept2(doc);
    })

})



//October 1


const attendanceOct1 = document.querySelector('#October1');

function renderOct1(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let dept = document.createElement('span');
    let Oct1 = document.createElement('span');
    let Oct1f = document.createElement('span');
  


    li.setAttribute('data-id',doc.id);
    name.textContent = doc.data().name;
    dept.textContent = doc.data().dept;
    Oct1.textContent = doc.data().Oct1;
    Oct1f.textContent = doc.data().Oct1f;
  


    li.appendChild(name);
    li.appendChild(dept);
    li.appendChild(Oct1);
    li.appendChild(Oct1f);
    
  

    attendanceOct1.appendChild(li);

}


db.collection('attendance').get().then((snapshot)=>{
    snapshot.docs.forEach(doc => {
        renderOct1(doc);
    })

})





//October 2


const attendanceOct2 = document.querySelector('#October2');

function renderOct2(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let dept = document.createElement('span');
    let Oct2 = document.createElement('span');
    let Oct2f = document.createElement('span');
  


    li.setAttribute('data-id',doc.id);
    name.textContent = doc.data().name;
    dept.textContent = doc.data().dept;
    Oct2.textContent = doc.data().Oct2;
    Oct2f.textContent = doc.data().Oct2f;
  


    li.appendChild(name);
    li.appendChild(dept);
    li.appendChild(Oct2);
    li.appendChild(Oct2f);
    
  

    attendanceOct2.appendChild(li);

}


db.collection('attendance').get().then((snapshot)=>{
    snapshot.docs.forEach(doc => {
        renderOct2(doc);
    })

})




//November 1


const attendanceNov1 = document.querySelector('#November1');

function renderNov1(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let dept = document.createElement('span');
    let Nov1 = document.createElement('span');
    let Nov1f = document.createElement('span');
  


    li.setAttribute('data-id',doc.id);
    name.textContent = doc.data().name;
    dept.textContent = doc.data().dept;
    Nov1.textContent = doc.data().Nov1;
    Nov1f.textContent = doc.data().Nov1f;
  


    li.appendChild(name);
    li.appendChild(dept);
    li.appendChild(Nov1);
    li.appendChild(Nov1f);
    
  

    attendanceNov1.appendChild(li);

}


db.collection('attendance').get().then((snapshot)=>{
    snapshot.docs.forEach(doc => {
        renderNov1(doc);
    })

})





//November 2


const attendanceNov2 = document.querySelector('#November2');

function renderNov2(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let dept = document.createElement('span');
    let Nov2 = document.createElement('span');
    let Nov2f = document.createElement('span');
  


    li.setAttribute('data-id',doc.id);
    name.textContent = doc.data().name;
    dept.textContent = doc.data().dept;
    Nov2.textContent = doc.data().Nov2;
    Nov2f.textContent = doc.data().Nov2f;
  


    li.appendChild(name);
    li.appendChild(dept);
    li.appendChild(Nov2);
    li.appendChild(Nov2f);
    
  

    attendanceNov2.appendChild(li);

}


db.collection('attendance').get().then((snapshot)=>{
    snapshot.docs.forEach(doc => {
        renderNov2(doc);
    })

})











