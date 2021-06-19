// DOM elements
const contactDataList = document.querySelector('.contactData');
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
const accountDetails = document.querySelector('.account-details');


const setupUI = (user) => {
    if (user) {
      // account info
    const html = `
    <div>Logged in as ${user.email}</div>
    `;
  accountDetails.innerHTML = html;
      // toggle user UI elements
      loggedInLinks.forEach(item => item.style.display = 'block');
      loggedOutLinks.forEach(item => item.style.display = 'none');
    } else {
      // clear account info
      accountDetails.innerHTML = '';
      // toggle user elements
      loggedInLinks.forEach(item => item.style.display = 'none');
      loggedOutLinks.forEach(item => item.style.display = 'block');
    }
  };

// setup Data
const setupcontactData = (data) => {

 if(data.length){
  let html = '<h6 class= "center-align">Contact Data</h6>';
  data.forEach(doc => {
    const contactdata = doc.data();
    const li = `
      <li>
        <div class="collapsible-header grey lighten-4"> ${contactdata.email} </div>
        <div class="collapsible-body white"> ${contactdata.message} </div>
      </li>
    `;
    html += li;
  });
  contactDataList.innerHTML = html;
}else {
    contactDataList.innerHTML = '<h5 class="center-align">Official Logins only</h5>'
}
};


// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);

});
