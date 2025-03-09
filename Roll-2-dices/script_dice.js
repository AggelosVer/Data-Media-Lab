const button= document.querySelector("button");
const output = document.querySelector(".results");

button.addEventListener('click',roller);


function roller() {
    output.innerHTML = ""; 

    const val= [];
    for (let i = 0; i < 2; i++) {  
        const ranNum = Math.floor(Math.random() * 6) + 1;
        val[i] = 9855 + ranNum; 
        output.innerHTML += `&#${val[i]}; `; 
    }
    setTimeout(() => {
    if ((val[0]+val[1]) %2 === 0){
        alert("You win");
    }
    else{
        alert("You lose")
    }
}, 200);
}