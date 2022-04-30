const board = document.querySelector('#board')
const colors = ['#FF00FF','#FF00FF','#8B008B', '#E6E6FA', '#4B0082','#87CEFA','#DDA0DD']
const SQUARES_NAMBER = 400

for (let i = 0; i < SQUARES_NAMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mousemove', () => setColor(square))

    square.addEventListener('mouseleave', () => removeColor(square))
    
    board.append(square)
}

function setColor(element) {
    const color = getColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#290235'
    element.style.boxShadow = '0 0 2px #000'
}

function getColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}