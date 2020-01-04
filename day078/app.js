//check
console.log('firebase');

const start = document.getElementById('start');
const op = document.querySelector('.op');

start.addEventListener('click', function () {
  op.classList.add('start');
});


db.collection('words').onSnapshot(snapshot => {
  let changes = snapshot.docChanges();
  changes.forEach(change => {
    renderWords(change.doc);
  });
});

const outputBox = document.querySelector('#outputBox');

function renderWords(doc) {
  let wordlist = document.createElement('span');
  wordlist.innerHTML = doc.data().word;
  outputBox.appendChild(wordlist);
}

const form = document.querySelector('#input-word');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (form.word.value) {
    db.collection('words').add({
      word: `❤️❤️${form.word.value}❤️❤️`
    });
    form.word.value = "";
  }
})
