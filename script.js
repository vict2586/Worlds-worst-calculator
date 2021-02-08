"use strict";

document.addEventListener("DOMContentLoaded", ButtonClick);

let firstnumber;
let secondnumber;
let calculate;
let operator;

function ButtonClick() {
  console.log("working");

  //click calculate
  document.querySelector("#calculate").addEventListener("click", result);

  //click clear results
  document.querySelector("#clear").addEventListener("click", ResultClear);
}

function result() {
  console.log("done");

  //read first and second number
  firstnumber = document.querySelector("#firstnumber").value;
  secondnumber = document.querySelector("#secondnumber").value;

  //+  *  /  -
  let op = document.querySelector("#operator");
  operator = op.options[op.selectedIndex].text;

  //calculate
  calculate = eval(firstnumber + operator + secondnumber);

  //rounded box checked off? -> yes/no
  if (document.querySelector("#doround").checked == true) {
    let round = document.querySelector("#decimals");
    let roundNum = round.options[round.selectedIndex].text;
    calculate = calculate.toFixed(roundNum);
  }

  //write result
  document.querySelector("#results").innerHTML += "<li>" + calculate + "</li>";

  //write result in 'firstnumber'
  document.querySelector("#firstnumber").value = calculate;

  //scroll list to bottom
  document.querySelector("#results").lastChild.scrollIntoView(false);
}

function ResultClear() {
  console.log("gone");

   //clear results
  document.querySelector("#results").innerHTML = "";
}
