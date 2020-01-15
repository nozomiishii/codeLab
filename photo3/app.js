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
