let count = 0
const countElement = document.getElementById('cart-count')

const audioMerrychristmas = new Audio('../assets/audio/merry-christmas.mp3')
const audioConfetti = new Audio('../assets/audio/confetti.wav')

audioMerrychristmas.volume = 0.1
audioConfetti.volume = 0.07

function addItem() {
  if(count === 0) {
    countElement.style.display = 'block'
  }

  count++
  countElement.innerText = count

  audioMerrychristmas.play()
  audioConfetti.play()

  handleConfettiEffect()
}
