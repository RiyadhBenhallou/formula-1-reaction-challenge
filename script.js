const redLight = document.querySelector('.red-light')
const greenLight = document.querySelector('.green-light')
const orangeLight = document.querySelector('.orange-light')
const score = document.querySelector('.result')
const bestScore = document.querySelector('.best-time')

let endTime
let startTime
let bestTime

let startTimeout;

const startGame = () => {
    score.innerHTML = 'Focus!';
    redLight.style.display = 'none';
    orangeLight.style.display = 'block';

    const delay = 2000 + 1000 * Math.floor(Math.random() * 4);

    startTimeout = setTimeout(() => {
            orangeLight.style.display = 'none';
            greenLight.style.display = 'block';
            startTime = new Date();
    }, delay);
};

const jumpStart = () => {
     if (startTimeout) {
        clearTimeout(startTimeout);
    }
    redLight.style.display = 'block';
    orangeLight.style.display = 'none';
    score.innerHTML = 'Restart!';
};


const stopGame = () => {
    redLight.style.display = 'block'
    greenLight.style.display = 'none'
    endTime = new Date();
    const result = (endTime - startTime) / 1000
    score.innerHTML = result + ' Seconds'

    if (!bestTime || result < bestTime) {
        bestTime = result;
    }
    bestScore.innerHTML = 'Your best score is: ' + bestTime + ' Seconds';
    

}
