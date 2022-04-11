"use strict"

let buttonCountPlus = document.getElementById("buttonCountPlus");
let buttonCountMinus = document.getElementById("buttonCountMinus");
let count = document.getElementById("buttonCountNumber");
let count2 = document.getElementById("num");
let number = 1;
let price = 200;
let countPlus = document.querySelectorAll('.counter-plus')
let countMinus = document.querySelectorAll('.counter-minus')

buttonCountPlus.onclick = function() {
    if (number <= 19) {
        number++;
        count.innerHTML = number;
        count2.value = '$' + ' ' + number * price;
    }
};

buttonCountMinus.onclick = function() {
   if (number >= 2) {
       number--;
       count.innerHTML = number;
       count2.value = '$' + ' ' + number * price;
    }
}

let inputs = document.querySelectorAll('input');
for (let index = 0; index < inputs.length; index++) {
   inputs[index].setAttribute('readonly', 'true') 
}