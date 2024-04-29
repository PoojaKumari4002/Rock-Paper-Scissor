let uscore=0;
let cscore=0;
const choices = document.querySelectorAll(".choice");
const msg=document.querySelector(".msg");
const userscore = document.querySelector(".userScore");
const compscore = document.querySelector(".compScore");
const restart = document.querySelector(".msg1");
// const msgContainer=document.querySelector(".mssg");

// msgContainer.classList.remove("mssg")
const compschoice=()=>{
    const options = ["rock","paper","scissor"];
    const random = Math.floor(Math.random()*3);
    return options[random];
}
const showWinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        msg.classList.remove("mssg");
        uscore++;
        userscore.innerText=uscore;
        // console.log("You won!");
        msg.innerText=`Your ${userchoice} beats Computers ${compchoice}`;
        // msg.
    }
    else{
        msg.classList.add("mssg");
        cscore++;
        compscore.innerText=cscore;
        // console.log("You lose!");
        msg.innerText=`Computers ${compchoice} beats Your ${userchoice}`;
    }
};
const playgame = (userchoice)=>{
    console.log("Users choice: ",userchoice)
    const compchoice=compschoice();
    console.log("Comp choice: ",compchoice)
    if(userchoice===compchoice){
        msg.innerText="Draw. Play again.";
    }
    else{
        let userWin=true;
        if(userchoice==="rock"){
            userWin=compchoice==="paper"?false:true;
        }
        else if(userchoice==="paper"){
            userWin=compchoice==="scissor"?false:true;
        }
        else{
            userWin=compchoice==="rock"?false:true;
        }
        showWinner(userWin,userchoice,compchoice);
    }
};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});
// restart.addEventListener("click",()=>{
//     uscore=0;
//     cscore=0;
// })
const resetGame = ()=>{
    uscore=0;
    cscore=0;
}
restart.addEventListener("click",resetGame);