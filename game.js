const waiterImg = document.querySelector('.image img');
const content = document.querySelector('.content');
const contentCount = document.querySelector('.content__count');
const contentAfter = document.querySelector('.content__after');
const amount = document.querySelector('.content__amount span');

let gameStatus = 0;
let result = 'start';
let randNum = () => Math.floor(Math.random()*1000);

const setImage = () => {
    switch (result) {
        case 'start':
            waiterImg.src = "/img/group 2.png";

            console.log("weszlo");
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
        contentAfter.style.display = "block";
        putTheValue();
    }
    else {
        contentCount.style.display = "none";
        contentAfter.style.display = "block";
    }
}
const putTheValue = () => {
    let mealCost = randNum();
    amount.textContent = mealCost;
}

const initialise = () => {
    setImage();
    checkStatus();
}


initialise();
