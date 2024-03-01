const redLight = document.querySelector('.red-light')
const greenLight = document.querySelector('.green-light')
const orangeLight = document.querySelector('.orange-light')
const score = document.querySelector('.result')
const bestScore = document.querySelector('.best-time')

let endTime
let startTime
let bestTime

const startGame = () => {
    if (score.innerHTML != 'Click to start!' || score.innerHTML == 'Click to start!') {
        score.innerHTML = 'Focus!'
    }

    redLight.style.display = 'none'
    orangeLight.style.display = 'block'
    const delay = 2000 + 1000 * Math.floor(Math.random() * 4)

    setTimeout(() => {
        orangeLight.style.display = 'none'
        greenLight.style.display = 'block'
        startTime = new Date();
    }, delay)


}

const stopGame = () => {
    redLight.style.display = 'block'
    greenLight.style.display = 'none'
    endTime = new Date();
    const result = (endTime - startTime) / 1000
    score.innerHTML = result + ' Seconds'

    if (bestTime) {
        if (result < bestTime) {
            bestScore.innerHTML = 'Your best score is: ' + result + ' Seconds' 
        }
    } else {
        bestTime = result
        bestScore.innerHTML = 'Your best score is: ' + result + ' Seconds'
    }
    

}