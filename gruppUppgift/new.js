let customerName = sessionStorage.getItem("customerName");
document.getElementById("customerName").innerHTML = customerName;

let customerNumber = sessionStorage.getItem("customerNumber");
document.getElementById("customerNumber").innerHTML = customerNumber;

let customerEmail = sessionStorage.getItem("customerEmail");
document.getElementById("customerEmail").innerHTML = customerEmail;

let customerAddress = sessionStorage.getItem("customerAddress");
document.getElementById("customerAddress").innerHTML = customerAddress;

let customerPostalCode = sessionStorage.getItem("customerPostalCode");
document.getElementById("customerPostalCode").innerHTML = customerPostalCode;

let customerCity = sessionStorage.getItem("customerCity");
document.getElementById("customerCity").innerHTML = customerCity;



var itemImg = sessionStorage.getItem("itemImage");
var itemName = sessionStorage.getItem("itemName");
var itemPrice = sessionStorage.getItem("itemPrice");


document.getElementById("itemImage").src = itemImg;
document.getElementById("itemName").innerHTML = itemName;
document.getElementById("itemPrice").innerHTML = itemPrice;