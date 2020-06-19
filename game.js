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

class Game {
    constructor(gameStatus = 0, result = 'start', cost = 0) {
        this.gameStatus = gameStatus;
        this.result = result;
        this.score = 0;
        this.cost = cost;
        this.numberGiven = "";
    }

    randNum = () => Math.floor(Math.random()*1000);

    setImageTxt = () => {
        switch (this.result) {
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

    checkStatus = () => {
        if (!this.gameStatus) {
            contentAfter.style.display = "none";
            contentCount.style.display = "block";
            this.putTheValue();
        }
        else {
            contentCount.style.display = "none";
            contentAfter.style.display = "flex";
        }
    }

    putTheValue = () => {
        let mealCost = this.randNum();
        this.cost = mealCost;
        amount.textContent = "$"+mealCost;
    }

    checkTheInput = () => {
    
    }

    scoreRender = () => {
        const scoreColor = () => {
            if (this.score < 0) {
                scorePts.style.color = "red";
            }
            else if (this.score > 0) {
                scorePts.style.color = "#32E925";
            }
            else {
                scorePts.style.color = "white";
            }
        }
        scoreColor();
        scorePts.textContent = this.score;
    }

    setCorrectTip  = () => {
        let tip = this.cost*0.15;
        let minTip = tip - (tip*0.1);
        let maxTip = tip + (tip*0.1);
        const isCorrect = (minTip, maxTip) => {
            if (this.numberGiven > minTip && this.numberGiven < maxTip) {
                this.result = 'good';
                this.score++;
                this.scoreRender();
                this.gameStatus = 1;
                this.checkStatus();
                this.setImageTxt();
            }
            else if (this.numberGiven < minTip) {
                this.result = 'low';
                this.score--;
                this.scoreRender();
                this.gameStatus = 1;
                this.checkStatus();
                this.setImageTxt();
            }
            else {
                this.result = 'high';
                this.score--;
                this.scoreRender();
                this.gameStatus = 1;
                this.checkStatus();
                this.setImageTxt();
            }
        }  
        isCorrect(minTip, maxTip);
    }

    changeToNum = () => {
        this.numberGiven = Number(input.value);
        if (input.value !== '' && !isNaN(this.numberGiven)) {
            this.setCorrectTip();
        }
        else {}
    }

    initialise = () => {
        this.setImageTxt();
        this.scoreRender();
        this.checkStatus();
    }

    setListerners = () => {
        inputBtn.addEventListener('click', function () {
            game.changeToNum();
        })
        nextBtn.addEventListener('click', function () {
            game.gameStatus = 0;
            game.result = "start";
            game.initialise();
        })
    }


}

const game = new Game();
game.setListerners();
game.initialise();

