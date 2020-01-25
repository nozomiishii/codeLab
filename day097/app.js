const scoreList = document.querySelector('#score-list');

function renderData(doc) {
  let li = document.createElement('li');
  li.setAttribute('data-id', doc.id);
  li.innerHTML = ` <p>${doc.data().name}  ${doc.data().score}pt</p>`
  scoreList.appendChild(li);
}

db.collection('ranks').get().then(snapshot => {
  snapshot.docs.forEach(doc => {
    renderData(doc);
  });
})
