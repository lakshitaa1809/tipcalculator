"use strict";
let billamt = document.getElementById("billamount");
let peoplecount = document.getElementById("people");
let five = document.getElementById("five");
let ten = document.getElementById("ten");
let fifteen = document.getElementById("fifteen");
let twentyfive = document.getElementById("twenty");
let fifty = document.getElementById("fifty");
let custom = document.getElementById("Custom");
let CLEAR = document.getElementById("clear");
let total = document.getElementById("total");
let tip = document.getElementById("tip");
function init() {
  total.value = "$0.00";
  tip.value = "$0.00";
}
init();
five.addEventListener("click", calc);
ten.addEventListener("click", calc_1);
fifteen.addEventListener("click", calc_2);
twentyfive.addEventListener("click", calc_3);
fifty.addEventListener("click", calc_4);
custom.addEventListener("click", calc_5);
CLEAR.addEventListener("click", resetoutput);
function resetoutput() {
  document.getElementById("total").innerHTML = "$0.00";
  document.getElementById("tip").innerHTML = "$0.00";
  document.getElementById("billamount").value = "";
  document.getElementById("people").value = "";
  error.textContent = "";
  error.style.color = "";
  error1.textContent = "";
  error1.style.color = "";
  document.getElementById("Custom").style.backgroundColor = "";
  document.getElementById("five").style.backgroundColor = "";
  document.getElementById("ten").style.backgroundColor = "";
  document.getElementById("fifteen").style.backgroundColor = "";
  document.getElementById("twenty").style.backgroundColor = "";
  document.getElementById("fifty").style.backgroundColor = "";
}
function calc() {
  document.getElementById("five").style.backgroundColor = "hsl(172, 67%, 45%";
  let bill = billamt.value;
  let people = peoplecount.value;
  console.log(bill);
  console.log(people);
  if (bill == 0 || people == 0) {
    if (bill == 0) {
      var error = document.getElementById("error");
      error.textContent = "Can't be zero";
      error.style.color = "red";
    } else {
      var error1 = document.getElementById("error1");
      error1.textContent = "Can't be zero";
      error1.style.color = "red";
    }
  } else {
    let tip1 = bill * 0.1;
    tip = (tip1 / people).toFixed(2);
    let total1 = bill / people;
    total = (Number(total1) + Number(tip)).toFixed(2);
    document.getElementById("total").value = "$" + total;
    document.getElementById("tip").value = "$" + tip;
  }
}
function calc_1() {
  document.getElementById("ten").style.backgroundColor = "hsl(172, 67%, 45%";
  let bill = billamt.value;
  let people = peoplecount.value;
  console.log(bill);
  console.log(people);
  if (bill == 0 || people == 0) {
    if (bill == 0) {
      var error = document.getElementById("error");
      error.textContent = "Can't be zero";
      error.style.color = "red";
    } else {
      var error1 = document.getElementById("error1");
      error1.textContent = "Can't be zero";
      error1.style.color = "red";
    }
  } else {
    let tip1 = bill * 0.1;
    tip = (tip1 / people).toFixed(2);
    let total1 = bill / people;
    total = (Number(total1) + Number(tip)).toFixed(2);
    document.getElementById("total").value = "$" + total;
    document.getElementById("tip").value = "$" + tip;
  }
}
function calc_2() {
  document.getElementById("fifteen").style.backgroundColor =
    "hsl(172, 67%, 45%";
  let bill = billamt.value;
  let people = peoplecount.value;
  console.log(bill);
  console.log(people);
  if (bill == 0 || people == 0) {
    if (bill == 0) {
      var error = document.getElementById("error");
      error.textContent = "Can't be zero";
      error.style.color = "red";
    } else {
      var error1 = document.getElementById("error1");
      error1.textContent = "Can't be zero";
      error1.style.color = "red";
    }
  } else {
    let tip1 = bill * 0.15;
    tip = (tip1 / people).toFixed(2);
    let total1 = bill / people;
    total = (Number(total1) + Number(tip)).toFixed(2);
    document.getElementById("total").value = "$" + total;
    document.getElementById("tip").value = "$" + tip;
  }
}
function calc_3() {
  document.getElementById("twenty").style.backgroundColor = "hsl(172, 67%, 45%";
  let bill = billamt.value;
  let people = peoplecount.value;
  if (bill == 0 || people == 0) {
    if (bill == 0) {
      var error = document.getElementById("error");
      error.textContent = "Can't be zero";
      error.style.color = "red";
    } else {
      var error1 = document.getElementById("error1");
      error1.textContent = "Can't be zero";
      error1.style.color = "red";
    }
  } else {
    let tip1 = bill * 0.25;
    tip = (tip1 / people).toFixed(2);
    let total1 = bill / people;
    total = (Number(total1) + Number(tip)).toFixed(2);
    document.getElementById("total").value = "$" + total;
    document.getElementById("tip").value = "$" + tip;
  }
}
function calc_4() {
  document.getElementById("fifty").style.backgroundColor = "hsl(172, 67%, 45%";
  let bill = billamt.value;
  let people = peoplecount.value;
  if (bill == 0 || people == 0) {
    if (bill == 0) {
      var error = document.getElementById("error");
      error.textContent = "Can't be zero";
      error.style.color = "red";
    } else {
      var error1 = document.getElementById("error1");
      error1.textContent = "Can't be zero";
      error1.style.color = "red";
    }
  } else {
    let tip1 = bill * 0.5;
    tip = (tip1 / people).toFixed(2);
    let total1 = bill / people;
    total = (Number(total1) + Number(tip)).toFixed(2);
    document.getElementById("total").value = "$" + total;
    document.getElementById("tip").value = "$" + tip;
  }
}
function calc_5() {
  document.getElementById("Custom").style.backgroundColor = "hsl(172, 67%, 45%";
  let bill = billamt.value;
  let people = peoplecount.value;
  if (bill == 0 || people == 0) {
    if (bill == 0) {
      var error = document.getElementById("error");
      error.textContent = "Can't be zero";
      error.style.color = "red";
    } else {
      var error1 = document.getElementById("error1");
      error1.textContent = "Can't be zero";
      error1.style.color = "red";
    }
  } else {
    let tip1 = bill * 0.02;
    tip = (tip1 / people).toFixed(2);
    let total1 = bill / people;
    total = (Number(total1) + Number(tip)).toFixed(2);
    document.getElementById("total").value = "$" + total;
    document.getElementById("tip").value = "$" + tip;
  }
}
