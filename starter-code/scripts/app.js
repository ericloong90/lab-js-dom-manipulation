// Calculator Buttons

var basicCalcButton = document.getElementById("basic-calc");
var tripCalcButton = document.getElementById("trip-calc");
var bmiCalcButton = document.getElementById("bmi-calc");
var mortCalcButton = document.getElementById("mortgage-calc");

// Basic Calculator

if (basicCalcButton) {
  basicCalcButton.addEventListener("click", function () {
    var basicNumber1 = document.getElementById("basic-num-1");
    var basicNumber2 = document.getElementById("basic-num-2");
    var basicOperator = document.getElementById("basic-operation");
    var basicAnswer = document.getElementById("basic-answer-alert");

    var number1 = parseInt(basicNumber1.value, 10);
    var number2 = parseInt(basicNumber2.value, 10);
    var operator = basicOperator.value;
    var results = 0;

    if (operator === "+") {
      results = number1 + number2;
    }
    else if (operator === "-") {
      results = number1 - number2;
    }
    else if (operator === "*") {
      results = number1 * number2;
    }
    else if (operator === "/") {
      results = number1 / number2;
    }

    basicAnswer.innerHTML = results;
  });
}

// Trip Cost Calculator

if (tripCalcButton) {
  tripCalcButton.addEventListener("click", function () {
    var distance = parseInt(document.getElementById("trip-distance").value, 10);
    var mpg = parseInt(document.getElementById("trip-mpg").value, 10);
    var tripCost = parseInt(document.getElementById("trip-cost").value, 10);
    var tripSpeed = parseInt(document.getElementById("trip-speed").value, 10);
    var tripAnswer = document.getElementById("trip-answer-alert");

    if (tripSpeed <= 60) {
      tripAnswer.innerHTML = (distance / mpg) * tripCost;
    }
    else if (tripSpeed > 60) {
      tripAnswer.innerHTML = (distance / (mpg - (tripSpeed - 60) * 2) * tripCost);
    }
  });
}

// BMI Calculator

if (bmiCalcButton) {
  bmiCalcButton.addEventListener("click", function () {
    var bmiMass = parseInt(document.getElementById("bmi-mass").value, 10);
    var bmiHeight = parseInt(document.getElementById("bmi-height").value, 10);
    var bmiAnswer = document.getElementById("bmi-answer-alert");

    bmiAnswer.innerHTML = (bmiMass / (bmiHeight * bmiHeight)) * 703;
  });
}

// Mortgage Calculator

if (mortCalcButton) {
  mortCalcButton.addEventListener("click", function () {
    var loan = parseInt(document.getElementById("mortgage-loan").value, 10);
    var apr = parseInt(document.getElementById("mortgage-apr").value, 10);
    var term = parseInt(document.getElementById("mortgage-term").value, 10);
    var mortAnswer = document.getElementById("mortgage-answer-alert");

    var tempAnswer = loan * apr * Math.pow((1 + apr), term) / (Math.pow((1 + apr), term) - 1);
    mortAnswer.innerHTML = tempAnswer;
  });
}