let SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

let recognition = new SpeechRecognition();




//eventListener

recognition.addEventListener('result', toSpeak)


//functions

function toSpeak(event) {

const msg = event.results
  console.log(msg)
}

document.body.onclick = () => {
  recognition.start();
  console.log('Ready to receive a color command.');
}
