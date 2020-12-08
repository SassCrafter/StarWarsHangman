
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
    const wordArr = word.split('');
    console.log(wordArr);
    wordArr.forEach(letter => {
        const wordListItem = document.createElement('li');
        wordListItem.classList.add('word-letter');
        wordListItem.innerHTML = '_';
        wordEl.appendChild(wordList);
        wordList.appendChild(wordListItem);
    })
}

function check() {
    const currentLetter = this.innerText;
    if(word.includes(currentLetter)) {
        this.classList.add('correct-guess');
        const dashesArray = document.querySelectorAll('.word-letter');
        //dashesArray[word.indexOf(currentLetter)].innerHTML = currentLetter;
        for (let i = 0; i < word.length; i++) {
            if (word[i] === currentLetter) {
                console.log('yes');
                dashesArray[i].innerHTML = currentLetter;
            }
        }
    } else {
        this.classList.add('wrong-guess');
    }    
}

function play() {
    createLetterButtons();
    const gameButtons = document.querySelectorAll('.letter');
    gameButtons.forEach(button => { button.addEventListener('click', check)})
    console.log(word);
    createWordDashes();
}

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
't', 'u', 'v', 'w', 'x', 'y', 'z'];

const words = ["alderaan", "asteroid", "coruscant", "dagobah", "hoth", "kashyyyk", "naboo", "tatooine", "droid", "atat", "blaster", 
"podracer", "sandcrawler", "clone", "luke", "leia", "vader", "biggs", "dooku", "dak", "emperor", "palpatine", "fin", "rey", "tarkin", 
"han", "chewbacca", "jabba", "greedo", "lando", "yoda", "padme", "maul", "wedge", "yoda", "bantha", "sarlacc", "wampa", "tauntaun", 
"wookie", "empire", "rebel", "light", "dark", "bowcaster", "phasma", "lightsaber", "skywalker", "sith", "jedi"];

const word = getRandomWord();
console.log(word);
window.onload = function() {
    play();
}