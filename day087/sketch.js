const btn = document.getElementById('btn');
const video = document.getElementById('v');

btn.addEventListener('click', () => {
  navigator.mediaDevices.getUserMedia({
      video: {
        width: window.innerWidth,
        height: window.innerHeight * 0.6
      },
      audio: false
    })
    .then(stream => video.srcObject = stream)
    .catch(err => alert(`${err.name} ${err.message}`));
}, false);
