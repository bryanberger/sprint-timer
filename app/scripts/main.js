import { Clock } from './clock'

let clock = new Clock()
let graduations = document.querySelectorAll('.graduations .label')
let btnStop = document.querySelector('button.stop')

btnStop.addEventListener('click', function(e) {
  clock.stop()
})

Array.from(graduations).forEach(graduation => {
  graduation.addEventListener('click', function(e) {
    let minutes = parseFloat(e.target.innerText)
    minutes = minutes == 0 ? 60 : minutes
    clock.start(minutes)
  })
})
