console.log('index');

const modalTriggers = document.querySelectorAll('.modal-trigger');
const modalSignup = document.getElementById('modal-signup');
const modalLogin = document.getElementById('modal-login');
const modalAccount = document.getElementById('modal-account');

for (modalTrigger of modalTriggers) {
  modalTrigger.addEventListener('click', (e) => {
    e.preventDefault();
    switch (e.target.dataset['target']) {
      case "modal-login":
        console.log('modal-login');
        modalLogin.style.display = "block";
        break;
      case "modal-signup":
        console.log("modal-signup");
        modalSignup.style.display = "block";
        break;
      case "modal-account":
        console.log("modal-account");
        modalAccount.style.display = "block";
        break;
      default:
        console.log("doesn't work");
    }
  });
}


// const loggedOutLinks = document.querySelectorAll('.logged-out');
// const loggedInLinks = document.querySelectorAll('.logged-In');
// const setupUI = (user) => {
//   if (user) {
//     // db.collection('users').doc(user.uid).get().then(doc => {
//     //   const html = `
//     //     <div>Logged in as ${user.email}</div>
//     //     <div>${doc.data().bio}</div>
//     //   `
//     //   accountDetails.innerHTML = html;

//     // })
//     loggedInLinks.forEach(item => item.style.display = 'block');
//     loggedOutLinks.forEach(item => item.style.display = 'none');
//   } else {
//     accountDetails.innerHTML = "";
//     loggedInLinks.forEach(item => item.style.display = 'none');
//     loggedOutLinks.forEach(item => item.style.display = 'block');
//   }
// }
