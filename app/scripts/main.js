import { Clock } from './clock'

let clock = new Clock()
let graduations = document.querySelectorAll('.graduations .label')
let btnStop = document.querySelector('button.stop')
let btnMute = document.querySelector('button.mute')
let btnUnMute = document.querySelector('button.unmute')

btnStop.addEventListener('click', function(e) {
  clock.stop()
})

btnMute.addEventListener('click', function(e) {
  clock.mute()
  btnMute.style.display = "none"
  btnUnMute.style.display = "block"
})

btnUnMute.addEventListener('click', function(e) {
  clock.unmute()
  btnMute.style.display = "block"
  btnUnMute.style.display = "none"
})

Array.from(graduations).forEach(graduation => {
  graduation.addEventListener('click', function(e) {
    let minutes = parseFloat(e.target.innerText)
    minutes = minutes == 0 ? 60 : minutes
    clock.start(minutes)
  })
})
