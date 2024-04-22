let btn = document.querySelectorAll("button");
let you = document.querySelector("#yourScore");
let comp = document.querySelector("#compScore");
let text = document.querySelector("#text");

let yourScore = 0;
let compscore = 0;

btn.forEach((el) => {
    el.addEventListener("click", () => {
        let rand = Math.floor(Math.random() * (4 - 1) + 1);
        let num;
        switch(el.id){
            case "rock":num = 1;break;
            case "paper":num = 2;break;
            case "scissors":num = 3;break;
        }
    //wins
        if(num == 1 && rand == 3){
            text.innerHTML = "You win! Rock beats scissors!";
            yourScore++;
        }
        else if(num == 2 && rand == 1){
            text.innerHTML = "You win! Paper beats rock!";
            yourScore++;
        }
        else if(num == 3 && rand == 2){
            text.innerHTML = "You win! Scissors beats paper!";
            yourScore++;
        }
    //loses
        else if(rand == 1 && num == 3){
            text.innerHTML = "You lose! Rock beats scissors!";
            compscore++;
        }
        else if(rand == 2 && num == 1){
            text.innerHTML = "You lose! Paper beats rock!";
            compscore++;
        }
        else if(rand == 3 && num == 2){
            text.innerHTML = "You lose! Scissors beats paper!";
            compscore++;
        }
    //draws
        else if(rand == num && rand == 1){
            text.innerHTML = "Draw! Both chose rock!";
        }
        else if(rand == num && rand == 2){
            text.innerHTML = "Draw! Both chose paper!";
        }
        else if(rand == num && rand == 3){
            text.innerHTML = "Draw! Both chose scissors!";
        }
    
        you.innerHTML = yourScore;
        comp.innerHTML = compscore;
    })
});