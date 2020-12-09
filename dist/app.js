
function createLetterButtons() {
    const letterButtons = document.querySelector('.game__buttons');
    let letters = document.createElement('ul');
    letters.id = 'alphabet';
    alphabet.forEach(letter => {
        let listItem = document.createElement('li');
        listItem.classList.add('letter');
        listItem.innerHTML = letter;
        letterButtons.appendChild(letters);
        letters.appendChild(listItem);
    })
}



const getRandomWord = () => { return words[Math.floor((Math.random() * words.length) + 1)]}

function createWordDashes() {
    const wordEl = document.querySelector('.game__word');
    const wordList = document.createElement('ul');
    wordList.classList.add('dashes-list')
    const wordArr = word.split('');
    wordArr.forEach(letter => {
        const wordListItem = document.createElement('li');
        wordListItem.classList.add('word-letter');
        wordListItem.innerHTML = '_';
        wordEl.appendChild(wordList);
        wordList.appendChild(wordListItem);
    })
}

function removeWordDashes() {
    const dashes = document.querySelector('.dashes-list');
    if (dashes) {
        dashes.remove();
    }
}

function drawStickman() {
    drawArray[counter]();
}

const canvas = () => {
    let myStickman = document.getElementById("stickman");
    let context = myStickman.getContext('2d');
    context.beginPath();
    context.strokeStyle = "#fff";
    context.lineWidth = 2;
    return context;
}

const draw = (pathFromX, pathFromY, pathToX, pathToY) => {
    context.moveTo(pathFromX, pathFromY);
    context.lineTo(pathToX, pathToY);
    context.stroke();
}

const frame1 = () => { draw(0,150,120,150)};
const frame2 = () => { draw(10,0,10,600)};
const frame3 = () => { draw(0,5,70,5)};
const frame4 = () => {draw (60, 5, 60, 15)};
const torso = () => {draw(60, 36, 60, 70)};
const rightArm = () => {draw (60, 46, 100, 50);};
const leftArm = () => {draw (60, 46, 20, 50);};
const rightLeg = () => {draw (60, 70, 100, 100);};
const leftLeg = () => {draw (60, 70, 20, 100);};
const head = () => {
    let myStickman = document.getElementById("stickman")
    let context = myStickman.getContext('2d');
    context.beginPath();
    context.arc(60, 25, 10, 0, Math.PI*2, true);
    context.stroke();
}


function showWord() {
    //removeWordDashes();
    const list = document.querySelectorAll('.dashes-list li');
    for (let i = 0; i < list.length; i++) {
        list[i].innerHTML = word[i];
    }
}


function checkIfWin() {
    if (correctGuesses.length === word.length) {
        message.innerHTML = "Yeah, good job";
    }
}

function check() {
    const currentLetter = this.innerText;
    this.disabled = true;
    if (counter < 8) {
        this.classList.add('guess');
        if(word.includes(currentLetter)) {
            const dashesArray = document.querySelectorAll('.word-letter');
            for (let i = 0; i < word.length; i++) {
                if (word[i] === currentLetter) {
                    dashesArray[i].innerHTML = currentLetter;
                    correctGuesses.push(currentLetter);
                    checkIfWin();
                    //console.log(correctGuesses)
                }
            }
        } else {
            counter++;
            drawStickman();
        }    
    } else {
        counter++;
        drawStickman();
        message.innerHTML = 'Sorry, but you lost';
        showWord();
    }
}

function play() {
    word = getRandomWord()
    removeWordDashes();
    createWordDashes();
    console.log(word);
}

function reset() {
    const gameButtons = document.querySelectorAll('.letter');
    gameButtons.forEach(btn => { 
        btn.classList.remove('guess');
    })
    context.clearRect(0, 0, 400, 400);
    context = canvas();
    counter = -1;
    message.innerHTML = '';
    play();
}

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
't', 'u', 'v', 'w', 'x', 'y', 'z'];

const words = ["alderaan", "asteroid", "coruscant", "dagobah", "hoth", "kashyyyk", "naboo", "tatooine", "droid", "atat", "blaster", 
"podracer", "sandcrawler", "clone", "luke", "leia", "vader", "biggs", "dooku", "dak", "emperor", "palpatine", "fin", "rey", "tarkin", 
"han", "chewbacca", "jabba", "greedo", "lando", "yoda", "padme", "maul", "wedge", "yoda", "bantha", "sarlacc", "wampa", "tauntaun", 
"wookie", "empire", "rebel", "light", "dark", "bowcaster", "phasma", "lightsaber", "skywalker", "sith", "jedi"];


const message = document.querySelector('.message');
let context = canvas();
let word = '';
const drawArray= [frame1,frame2,frame3,frame4,head,torso,rightArm,leftArm,rightLeg,leftLeg];
let counter = -1;
const correctGuesses = [];
console.log(word);


window.onload = function() {
    
    play();
    createLetterButtons();
    const gameButtons = document.querySelectorAll('.letter');
    gameButtons.forEach(button => { button.addEventListener('click', check)});
    const restartBtn = document.querySelector('.game__restart-btn');
    restartBtn.addEventListener('click', reset);
}