const button= document.querySelector("button");
const output = document.querySelector(".results");
const scoreDisplay = document.querySelector(".score");
const HitsDisplay = document.querySelector(".hits");
const HighScoreDisplay = document.querySelector (".highscore");
const messageBox = document.querySelector(".message-box");
const cardCountDisplay = document.querySelector(".card-count");
const cardContainer = document.querySelector(".card-container");
const infoButton = document.querySelector(".info-button");
const cardInfo = document.querySelector(".card-info");

let score=1;
let hits=0;
let highscore=0;
let cardCount = 1;

scoreDisplay.innerText = `Score: ${score}`;
HitsDisplay.innerText = `Rolls: ${hits}`;
HighScoreDisplay.innerText = `HighScore: ${highscore}`;
output.innerHTML += `&#${9861}; `; 
output.innerHTML += `&#${9861}; `;

infoButton.addEventListener("click", () => {
    if (cardInfo.style.display === "none") {
        cardInfo.style.display = "block";
    } else {
        cardInfo.style.display = "none";
    }
});

button.addEventListener('click',() =>{
    hits ++;
    messageBox.style.visibility = "visible";
    HitsDisplay.innerText = `Rolls: ${hits}`;
    roller();

});

cardContainer.style.visibility = "visible";
cardCountDisplay.innerText = cardCount;

function roller() {

    button.disabled = true; 
    output.innerHTML = ""; 

    const val= [];
    const ranNum=[];
    for (let i = 0; i < 2; i++) {  
        ranNum[i] = Math.floor(Math.random() * 6) + 1;
        val[i] = 9855 + ranNum[i]; 
        output.innerHTML += `&#${val[i]}; `; 
    }
    setTimeout(() => {


        if (ranNum[0] === 6 && ranNum[1] === 6) {
            cardCount++;  
            cardContainer.style.visibility = "visible"; 
            cardCountDisplay.innerText = cardCount;
            message="You gain a protection shield!"
        }


        if (((ranNum[0] + ranNum[1])%2 === 0) && ranNum[0]!==ranNum[1]) {
            score=score+3
            if (score>highscore){
                highscore=score;
            }
           message="You win 3 points!";
        }

        else if(ranNum[0] === ranNum[1] && ranNum[0] + ranNum[1] !== 2){
            score=score+4
            if (score>highscore){
                highscore=score;
            }
            message="You win 4 points!"   ; 
        }

        else if(ranNum[0] === 1 && ranNum[1] === 1){
            if (cardCount>0){
                cardCount--;
                cardCountDisplay.innerText = cardCount;
                message= "Your Protection shield saved you!"
                if (cardCount === 0) {
                    cardContainer.style.visibility = "hidden"; 
                }
           }
            else{
                score=1;
                if (score>highscore){
                    highscore=score;         
                }
                hits=0;
                message="You lost!";
            }
        }

        else{
            if(score>1){
                score=score-2;
                if (score>highscore){
                    highscore=score;
                }
                message="You lose 2 points! ";
            }
            else{
                if (cardCount>0){
                    cardCount--;
                    cardCountDisplay.innerText = cardCount;
                    message= "Your Protection shield saved you!"
                    if (cardCount === 0) {
                        cardContainer.style.visibility = "hidden"; 
                    }
                }
                else{
                score=1;
                if (hits>highscore){
                    highscore=hits;
                }
                hits=0;
                message="You lost!";
                }
            }
            
    }
    scoreDisplay.innerText = `Score: ${score}`;
    HitsDisplay.innerText = `Rolls: ${hits}`;
    HighScoreDisplay.innerText = `HighScore: ${highscore}`;
    messageBox.innerHTML = message;
    button.disabled = false;
    }, 200);
    return score;
}
