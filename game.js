const waiterImg = document.querySelector('.image img');
const content = document.querySelector('.content');
const contentCount = document.querySelector('.content__count');
const contentAfter = document.querySelector('.content__after');
const amount = document.querySelector('.content__amount span');

const input = document.querySelector('.content__tipForm input');
const inputBtn = document.querySelector('.content__tipForm button');

const scorePts = document.querySelector('.score__points');

let gameStatus = 0;
let result = 'start';
let score = 0;
let randNum = () => Math.floor(Math.random()*1000);

const setImage = () => {
    switch (result) {
        case 'start':
            waiterImg.src = "/img/group 2.png";
            break;
        case 'low':
            waiterImg.src = "/img/group 3.png";
            break;
        case 'good':
            waiterImg.src = "/img/group 4.png";
            break;
        case 'high':
            waiterImg.src = "/img/group 5.png";
            break;
    }
}
const checkStatus = () => {
    if (!gameStatus) {
        contentAfter.style.display = "none";
        contentCount.style.display = "block";
        putTheValue();
    }
    else {
        contentCount.style.display = "none";
        contentAfter.style.display = "block";
    }
}
const putTheValue = () => {
    let mealCost = randNum();
    amount.textContent = "$"+mealCost;
}

const checkTheInput = () => {
    
}

const scoreRender = () => {
    scorePts.textContent = score;
}

const initialise = () => {
    setImage();
    scoreRender();
    checkStatus();
}

const setCorrectTip  = () => {
    
}

const changeToNum = () => {
    numberGiven = Number(input.value);
    console.log(numberGiven);
    if (input.value !== '' && !isNaN(numberGiven)) {
        console.log(`Twoj numer to: ${numberGiven}`);
    }
    else {console.log('Podaj jakis numer')}
}


inputBtn.addEventListener('click', function () {
    changeToNum();
})
initialise();
