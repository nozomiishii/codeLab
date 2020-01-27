auth.onAuthStateChanged(user => {
  if (user) {
    console.log('user logged in: ', user);
    // get data 
    db.collection('messages').onSnapshot(snapshot => {
      setupMessages(snapshot.docs);

    }, err => {
      console.log(err.message);
    });
  } else {
    console.log('user logged out');
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
  })
})
