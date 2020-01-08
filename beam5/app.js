//check
console.log('js is here');

// write game code from here
window.addEventListener('touchmove', function (event) {
  event.preventDefault();
}, {
  passive: false
});

function createRecord() {
  db.collection('records').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
      records.push(new Record(change.doc.data().name, change.doc.data().score));
    })
  })
}
