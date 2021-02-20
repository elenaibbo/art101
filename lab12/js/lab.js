/**
* Author: Elena Ibbetson
* Created: 20 February 2021
*
* Public Domain
**/

// Create a function sortingHat() that takes a string as an argument: function sortingHat(str)
function sortingHat(inputName) {
  // count the letters in str and assign it to a variable length
  var len = inputName.length
  // use modulus (% operator) to get the remainder with 4: mod = length % 4;
  var getMod = len % 4;
  // create a conditional that will return Gryffindor, Ravenclaw, Slytherin, and Hufflepuff,
    // depending on whether the value of mod is 0, 1, 2, or 3
    if (getMod == 0){
      return "Gryffindor";
    }
    else if (getMod == 1){
      return "Hufflepuff";
    }
    else if (getMod == 2){
      return "Ravenclaw";
    }
    else if (getMod == 3){
      return "Slytherin";
    }
};

var myButton = document.getElementById("button");
// Create an event listener attached to #button
myButton.addEventListener("click", function(){
  // Get the value of #input and assign it to a variable name
  var inputName= document.getElementById("input").value;
  // run sortingHat(name) and store the result in a variable house
  var house= sortingHat(inputName);
  outputText = "The Sorting Hat has placed you into... " + house + "!";
  document.getElementById("output").innerText= outputText;
});
