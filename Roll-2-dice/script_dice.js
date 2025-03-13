const button= document.querySelector("button");
const output = document.querySelector(".results");
const scoreDisplay = document.querySelector(".score");
const HitsDisplay = document.querySelector(".hits");
const HighScoreDisplay = document.querySelector (".highscore");
const messageBox = document.querySelector(".message-box");

let score=1;
let hits=0;
let highscore=0;


button.addEventListener('click',() =>{
    hits ++;
    HitsDisplay.innerText = `Rolls: ${hits}`;
    roller();

});

function roller() {

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
           message="You win 2 points";
        }
        else if(ranNum[0] === ranNum[1] && ranNum[0] + ranNum[1] !== 2){
            score=score+4
            message="You win 4 points"   ; 
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
            message="You lose 1 point ";
            }
            else{
                score=1;
                if (hits>highscore){
                    highScore=hits;
                }
                hits=0;
                message="You lost!";
            }
            
    }

    messageBox.innerHTML = message;

    scoreDisplay.innerText = `Score: ${score}`;
    HitsDisplay.innerText = `Rolls: ${hits}`;
    HighScoreDisplay.innerText = `HighScore: ${highscore}`;
    }, 200);
    return score;
}