const scoreList = document.querySelector('#score-list');
const rankList = document.querySelector('#rank-list');

// getting data 
function scoreListRenderData(doc) {
  let li = document.createElement('li');
  li.setAttribute('data-id', doc.id);
  li.innerHTML = `
  <p>${doc.data().name}</p>
  <p><span class="list-score">${doc.data().score}<span>pt</p>
  `
  scoreList.appendChild(li);
  li.classList.add('list-design');
}

// result data 
function rankListRenderData(doc) {
  let li = document.createElement('li');
  li.setAttribute('data-id', doc.id);
  li.innerHTML = `
  <p>${doc.data().name}</p>
  <p><span class="list-score">${doc.data().score}<span>pt</p>
  `
  rankList.appendChild(li);
  li.classList.add('list-design');
}

db.collection('ranks').orderBy("score", "desc").get().then(snapshot => {
  snapshot.docs.forEach(doc => {
    scoreListRenderData(doc);
    rankListRenderData(doc);
  });
})

// saving data 
const form = document.querySelector("#rank-player");
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  await db.collection('ranks').add({
    name: form.name.value,
    score: totalScore
  })
  console.log("send");
  location.reload();
})
