let gamSeq = [];
let usrSeq = [];
let hscr = 0;


let head = document.querySelector("h3");
let highscr = document.querySelector("h2");


let started = false;
let level = 0;

let clrs = ["one", "two", "three", "four"];


document.addEventListener("keypress", () => {
    if (started == false) {

        started = true;

        levelUp();
    }
})


function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 100)
}


function levelUp() {
    usrSeq = [];
    level++;
    head.innerText = `You are in Level ${level}`;


    let rndInx = Math.floor(Math.random() * 3);
    let rndClr = clrs[rndInx];
    let rndBtn = document.querySelector(`.${rndClr}`)

    gamSeq.push(rndClr);
    console.log(gamSeq)
    btnFlash(rndBtn);

}

function chkAns(idx) {

    if (usrSeq[idx] == gamSeq[idx]) {
        if (usrSeq.length == gamSeq.length) {

            setTimeout(levelUp,1000);

        }

    }
    else {

        head.innerText = `Game Over!!! Your Score was ${level}. Please press any key to start new game.`;

        if(level  > hscr){
            hscr = level
            highscr.innerText = `Highest Score : ${hscr}`;

        }


        document.addEventListener("keypress", () => {
            if (started == true) {
                level = 0;
                gamSeq = [];
                levelUp();
            }
        })
    }
}






function btnPrs() {
    let btn = this;
    btnFlash(btn);

    let usrClr = btn.getAttribute("id");
    usrSeq.push(usrClr);
    console.log(usrSeq)
    chkAns(usrSeq.length - 1);


}


let btns = document.querySelectorAll(".btn")
for (btn of btns) {
    btn.addEventListener("click", btnPrs);
}