const monsters = [...'🦄🐿🦩🐊🦕🐝'];

let monsterInterval = setInterval(() => {
  let randomMonster = Math.floor(Math.random() * monsters.length);
  // console.log(monsters[randomMonster]);
}, 1000);
