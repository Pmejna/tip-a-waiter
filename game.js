const waiterImg = document.querySelector('.image img');
const content = document.querySelector('.content');
const contentCount = document.querySelector('.content__count');
const contentAfter = document.querySelector('.content__after');
const amount = document.querySelector('.content__amount span');
const title = document.querySelector('.content__title');
const subtitle = document.querySelector('.content__subtitle');

const input = document.querySelector('.content__tipForm input');
const inputBtn = document.querySelector('.content__tipForm button');
const nextBtn = document.querySelector('.content__after button')

const scorePts = document.querySelector('.score__points');

let gameStatus = 0;
let result = 'start';
let score = 0;
let randNum = () => Math.floor(Math.random()*1000);
let cost = 0;

const setImageTxt = () => {
    switch (result) {
        case 'start':
            waiterImg.src = "/img/Group 2.png";
            break;
        case 'low':
            waiterImg.src = "/img/Group 5.png";
            title.style.color = "red";
            title.textContent = "NOT ENOUGH!";
            subtitle.textContent = "He might be a homeless soon";
            break;
        case 'good':
            waiterImg.src = "/img/Group 3.png";
            title.style.color = "#32E925";
            title.textContent = "WELL DONE!";
            subtitle.textContent = "You gave the right tip!";
            break;
        case 'high':
            waiterImg.src = "/img/Group 4.png";
            title.style.color = "red";
            title.textContent = "TOO MUCH";
            subtitle.textContent = "Other waiters hate him now!";
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
        contentAfter.style.display = "flex";
    }
}
const putTheValue = () => {
    let mealCost = randNum();
    cost = mealCost;
    amount.textContent = "$"+mealCost;
}

const checkTheInput = () => {
    
}

const scoreRender = () => {
    const scoreColor = () => {
        if (score < 0) {
            scorePts.style.color = "red";
        }
        else if (score > 0) {
            scorePts.style.color = "#32E925";
        }
        else {
            scorePts.style.color = "white";
        }
    }
    scoreColor();
    scorePts.textContent = score;
}

const initialise = () => {
    setImageTxt();
    scoreRender();
    checkStatus();
}

const setCorrectTip  = () => {
    let tip = cost*0.15;
    let minTip = tip - (tip*0.1);
    let maxTip = tip + (tip*0.1);
    const isCorrect = (minTip, maxTip) => {
        if (numberGiven > minTip && numberGiven < maxTip) {
            result = 'good';
            console.log('Good');
            score++;
            scoreRender();
            gameStatus = 1;
            checkStatus();
            setImageTxt();
        }
        else if (numberGiven < minTip) {
            console.log('Not enough');
            result = 'low';
            score--;
            scoreRender();
            gameStatus = 1;
            checkStatus();
            setImageTxt();
        }
        else {
            console.log('Too much');
            result = 'high';
            score--;
            scoreRender();
            gameStatus = 1;
            checkStatus();
            setImageTxt();
        }
    }  
    isCorrect(minTip, maxTip);
}

const changeToNum = () => {
    numberGiven = Number(input.value);
    console.log(numberGiven);
    if (input.value !== '' && !isNaN(numberGiven)) {
        console.log(`Twoj numer to: ${numberGiven}`);
        setCorrectTip();
    }
    else {console.log('Podaj jakis numer')}
}


inputBtn.addEventListener('click', function () {
    changeToNum();
})
nextBtn.addEventListener('click', function () {
    gameStatus = 0;
    result = "start";
    initialise();
})

initialise();
