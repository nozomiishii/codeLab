const start = document.getElementById('start');
const op = document.querySelector('.op');
start.addEventListener('click', function () {
  op.classList.add('start');
});

const medias = {
  autio: false,
  video: true
};

const video = document.getElementById('video');

async function displayCapture() {
  const media = await navigator.mediaDevices.getUserMedia(medias);
  video.srcObject = media
  console.log(media);
}

displayCapture().catch(err => console.error(err));
