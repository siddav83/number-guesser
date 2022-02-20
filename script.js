let SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

let recognition = new SpeechRecognition();
const msgs = document.querySelector(".msg")
const msgbox = document.querySelector(".box")
// recognition.continuous = true;

//eventListener

recognition.addEventListener('result', toSpeak)

//functions
function randomNumber() {
  const rnd = Math.floor(Math.random() * 100)
  return rnd
}

function writeStuff(msg) {
  msgs.innerHTML += ` <div>You said:</div>
  <span class="box">${msg}</span>`
}

function toSpeak(event) {
  let msg = parseInt(event.results[0][0].transcript)
  writeStuff(msg)
  checkNumber(msg)
  // checkNumber(msg)
}

function checkNumber(msg) {
  const num = +msg
  if(Number.isNaN(num)) {
    console.log(num)
    msgs.innerHTML = `
  <div>is not a number</div>`
  return
}
if(num < random) {
  msgs.innerHTML = `<div class="box">HIGHER</div>`
  return
}
else if(num > random) {
  msgs.innerHTML = `<div class="box">LOWER</div>`
  return

}
else if(num === random) {
  msgs.innerHTML = `<div class="box">BINGO</div>`
  return

}
}
document.body.onclick = () => {
  recognition.start();
  console.log('Ready to receive a color command.');
}

const random = randomNumber()
console.log(random)

onend = () => recognition.start()

