const button= document.querySelector("button");
const output = document.querySelector(".results");
const scoreDisplay = document.querySelector(".score");
const HitsDisplay = document.querySelector(".hits");
const HighScoreDisplay = document.querySelector (".highscore");
const messageBox = document.querySelector(".message-box");

let score=1;
let hits=0;
let highscore=0;

scoreDisplay.innerText = `Score: ${score}`;
HitsDisplay.innerText = `Rolls: ${hits}`;
HighScoreDisplay.innerText = `HighScore: ${highscore}`;
output.innerHTML += `&#${9861}; `; 
output.innerHTML += `&#${9861}; `;

button.addEventListener('click',() =>{
    hits ++;
    messageBox.style.visibility = "visible";
    HitsDisplay.innerText = `Rolls: ${hits}`;
    roller();

});

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
        if (((ranNum[0] + ranNum[1])%2 === 0) && ranNum[0]!==ranNum[1]) {
            score=score+2
            if (hits>highscore){
                highscore=hits;
            }
           message="You win 2 points!";
        }
        else if(ranNum[0] === ranNum[1] && ranNum[0] + ranNum[1] !== 2){
            score=score+4
            if (hits>highscore){
                highscore=hits;
            }
            message="You win 4 points!"   ; 
        }
        else if(ranNum[0]+ranNum[1]===2){
            score=1;
            if (hits>highscore){
                highscore=hits;         
            }
            hits=0;
           message="You lost!";
        }
        else{
            if(score>0){
            score--;
            if (hits>highscore){
                highscore=hits;
            }
            message="You lose 1 point! ";
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
    scoreDisplay.innerText = `Score: ${score}`;
    HitsDisplay.innerText = `Rolls: ${hits}`;
    HighScoreDisplay.innerText = `HighScore: ${highscore}`;
    messageBox.innerHTML = message;
    button.disabled = false;
    }, 200);
    return score;
}