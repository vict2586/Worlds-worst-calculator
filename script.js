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

};

function result() {

    console.log("done");

    //read first and second number
    firstnumber = document.querySelector("#firstnumber").value;
    secondnumber = document.querySelector("#secondnumber").value;
    operator = document.querySelector("#operator").value;

    


};

function ResultClear() {

    console.log("gone");

    //clear results
    document.querySelector("#results").innerHTML = "";

};

