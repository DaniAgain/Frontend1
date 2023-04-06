alert("hello Javascript");
const el = document.getElementById("one");
el.textContent = "Hello";
el.style.backgroundColor = "yellow";
//    el.style.display = "none";
window.alert("Hello Browser object model.")


let x1 = prompt("ange tal 1");
let x2 = prompt("ange tal 2");
x1 = Number(x1);
x2 = Number(x2);
alert("Summa : " + (x1 + x2));
console.log("Summa : " + (x1 + x2));

let today = new Date();
console.log(today.toLocaleDateString());

function display(){
    console.log("Hello Events!");
}