// let todo = [];
// let req = prompt("PLEASE ENTER YOUR RESQUEST ");
// while(true) {
//     if (req =="Quiet"){
//         console.log('Quitting App');
//         break;
//     }

//     if (req =="list"){
//         console.log("-------");
//         for (let i=0; i<todo.length;i++){
//             console.log(i,todo[i]);
//         }
//         // for(task of todo){
//         //     console.log(task);
//         console.log("---------");
//     }else if( req =="add"){
//         let task =prompt("please enter the task ypu want to add");
//         todo.push(task);
//         console.log("Task Added")
//     }else if(req =="Delete"){
//         let idx = prompt("please enter the task index");
//         todo.splice(idx,1);
//         console.log("TAK DELETED");
//     }
//     req = prompt("PLEASE ENTER YOUR RESQUEST ");
// }




let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function(){
    let item = document.createElement("li");//for print in screen
    item.innerText =inp.value;

    let delBtn = document.querySelector("button");
    delBtn.innerText =  "delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value="";// for input empty
});


// let delBtns= document.querySelectorAll(".delete");
// for(delBtn of delBtns) {
//     delBtn.addEventListener("click", function() {
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// }


ul.addEventListener("click", function() {
    if(event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("delete");
    }
});
