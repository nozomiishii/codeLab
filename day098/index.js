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

const main = document.getElementById('main');

const setupMessages = (data) => {
  if (data.length) {
    let html = "";
    data.forEach(doc => {
      const div = `
       <div class="message-style">
        <h2>${doc.data().message}</h2>
        <h1>${doc.data().icon}</h1>
        <h4>${doc.data().code}</h4>
       <div>
      `
      html += div;
    });
    main.innerHTML = html;
  } else {
    main.innerHTML = '<h5 class="message-style">Login is a must to see it</h5>'
  }
}
