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
