auth.onAuthStateChanged(user => {
  if (user) {
    console.log('user logged in: ', user);
    // get data 
    db.collection('messages').get().then(snapshot => {
      setupMessages(snapshot.docs);
      setupUI(user);
    });
  } else {
    console.log('user logged out');
    setupUI();
    setupMessages([]);
  }
})

// logout 
const logout = document.getElementById("logout");
logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut();
})

// login 
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;
  auth.signInWithEmailAndPassword(email, password).then(cred => {
    const modal = document.querySelector('#modal-login');
    modal.style.display = 'none';
    loginForm.reset();
    location.reload();
  })
})

// signup 
const signupForm = document.getElementById('signup-form');

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = signupForm["signup-email"].value;
  const password = signupForm["signup-password"].value;

  auth.createUserWithEmailAndPassword(email, password).then(() => {
    const modal = document.getElementById('modal-signup');
    modal.style.display = "none";
    signupForm.reset();
    location.reload();
  });
})
