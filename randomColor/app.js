let btn = document.querySelector("button");
let colorbox = document.querySelector("div");
let head = document.querySelector("h3");
let bodyc = document.querySelector("body");


function randColor() {
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    let rc = `rgb(${red},${blue},${green})`;
    return rc;
}

btn.addEventListener("click",() => {
    let mycolor = randColor();
    bodyc.style.backgroundColor = colorbox.style.backgroundColor;
    colorbox.style.backgroundColor = mycolor;
    head.innerText = `This color is ${mycolor}`
})

