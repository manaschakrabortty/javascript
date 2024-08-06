let gameSeq = [];
let iserSeq = [];

let btns = ["yellow","red","purple","green"];
let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {
    if (started == false) {
        console.log("Game is started");
        started == true;
        
        levelUp();
    }
});
function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    },250);
}


function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    },250);
}

function levelUp (){
    level++;
    h2.innerText=`level ${level}`;
    //random  btn choose
    let randIdx = Math.floor(Math.random() *3);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    console.log(randIdx)
    console.log(randColor)
    console.log(randbtn)
    gameFlash(randbtn);
}
function checkAns(idx){
    if(userSeq[idx]== gameSeq[idx]) {
        if (userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML= `Game over! yor score was<b>${level}</b> <br>Press any key to start`;
        document.querySelector("body").style.backgroundcolor= "red";
        setTimeout(function(){
            document.querySelector("body").style.color= "white";
        },150)
        reset();
    }
}

function btnPress() {
    console.log("btn was pressed");
}
let allBtns =document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}
