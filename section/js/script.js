console.log("it's loaded!");
//var nameVar = "Elena";
//var numNumb = 20;
//console.log(nameVar, numNumb);
//numNumb = 25;
//console.log(numNumb);
//numNumb = 42;
//console.log(numNumb);

function firstFunc() {
  console.log("this is my first function");
  console.log(numNumb);
}

var nameVar = "Elena";
var numNumb = 17;
firstFunc();
numNumb = numNumb + 4;
firstFunc();

function testBigger (firstNum, secondNum) {
  console.log("First Number: "+firstNum + " Second Number: "+ secondNum + " Comparison: " + (firstNum>secondNum));
}
var nameVar = "Elena";
var numNumb = 17;
firstFunc();
testBigger(15, 8);
testBigger(8,15);

var year = 2021
function ageFunc(made, year) {
  console.log("Car age: " + (year - made));
}
ageFunc(2010, year);
ageFunc(2000, year);
