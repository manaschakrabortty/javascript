// let btn = document.querySelector("button");

// btn.addEventListener("click", function() {
//     console.log("generate random color")
// });

// function getRandom(){
//     let red =Math.floor(Math.random() *255);
//     let green =Math.floor(Math.random() *255);//RGB R-0-255,G-0-255,B-0-255 => (R,G,B)
//     let blue =Math.floor(Math.random() *255);

//     let color =`rgb(${red},${green},${blue})`;
//     return color;
// }



let btn = document.querySelector("button");

btn.addEventListener("click", function() {
    let h3 = document.querySelector("h3");
    let RandomColor = getRandomColor();
    h3.innerText = RandomColor;

    let div =document.querySelector("div");
    div.style.backgroundColor =RandomColor;
    console.log("color updated");
});

function getRandomColor(){
    let red =Math.floor(Math.random() *255);
    let green =Math.floor(Math.random() *255);//RGB R-0-255,G-0-255,B-0-255 => (R,G,B)
    let blue =Math.floor(Math.random() *255);

    let color =`rgb(${red},${green},${blue})`;
    return color;
}
