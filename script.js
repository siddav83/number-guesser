const SpeechRecognition = window.speechRecognition || window.webkitSpeechRecognition;

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
  msgs.innerHTML = ` <div>You said:</div>
  <span class="box">${msg}</span>`
}

function toSpeak(event) {
  let msg = parseInt(event.results[0][0].transcript)
  writeStuff(msg)
  checkNumber(msg)
  // checkNumber(msg)
}
//logic for recognition
function checkNumber(msg) {
  const num = +msg
  if(Number.isNaN(num)) {
    console.log(num)
    msgs.innerHTML = `
  <div>is not a number</div>`
  return
}
if(num > 100 || num < 0) {
  msgs.innerHTML = `<div "Number must be great that 0 or less than 100</div>`
  return
}
if(num === random) {
  document.body.innerHTML = `BINGO you won
  you selected ${msg}`
  return
}
else if(num > random) {
  msgs.innerHTML += `<div class="box">LOWER</div>`
  return
} else {
  msgs.innerHTML += `<div class="box">LOWER</div>`
  return
}}

  recognition.start();

const random = randomNumber()
console.log(random)

recognition.addEventListener('end',() => recognition.start())

