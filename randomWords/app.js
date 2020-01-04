//check
console.log('firebase');

db.collection('words').get().then(snapshot => {
  snapshot.docs.forEach(doc => {
    renderWords(doc)
  });
});

const outputBox = document.querySelector('#outputBox');

function renderWords(doc) {
  let wordlist = document.createElement('p');
  wordlist.innerHTML += doc.data().word;
  outputBox.appendChild(wordlist);
}
