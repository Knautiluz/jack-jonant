// Initialising the canvas
let canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

// Setting the width and height of the canvas
canvas.width = window.innerWidth
canvas.height = window.innerHeight

const fontSize = 20
let columns = window.innerWidth / fontSize
ctx.font = `${fontSize}px Arial`
ctx.imageSmoothingEnabled = true


window.addEventListener('resize', () => {
    columns = window.innerWidth / fontSize
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    ctx.font = `${fontSize}px Arial`
    ctx.imageSmoothingEnabled = true
})

window.addEventListener('orientationchange', () => {
  columns = window.innerWidth / fontSize
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  ctx.font = `${fontSize}px Arial`
  ctx.imageSmoothingEnabled = true
})

// Setting up the letters
const letters = '⋊ᚨクДンᛟナトжᚲョ◇ᛊᚾᛃᛏソンᚾジ⋈□'.split('')
// Setting up the columns


// Setting up the drops
const drops = []
for (let i = 0; i < columns; i++) {
  drops[i] = 1
}

// Setting up the draw function
const draw = () => {
  ctx.fillStyle = 'rgba(0, 0, 0, .1)'
  ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)
  for (var i = 0; i < drops.length; i++) {
    var text = letters[Math.floor(Math.random() * letters.length)]
    ctx.fillStyle = '#0f0'
    ctx.fillText(text, i * fontSize, drops[i] * fontSize)
    drops[i]++
    if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
      drops[i] = 0
    }
  }
}

// Loop the animation
setInterval(draw, 30)