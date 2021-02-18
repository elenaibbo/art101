/**
* Author: Elena Ibbetson
* Created: 17 February 2021
*
**/

//find div ids and assign variables
var challengeButton= $("#challenges");
var resultButton= $("#results");
var outputButton= $("#output");

//create button element and add them to each div
$(challengeButton).append("<button> Click me! </button>");
$(resultButton).append("<button> No, click me! </button>");
$(outputButton).append("<button> Oi! Click me! </button>");

//add click function to buttons that makes text pop up
$(challengeButton).click(function(){
  $("#challenges").toggleClass("special");
  });

$(resultButton).click(function(){
  $("#results").toggleClass("special");
  });

$(outputButton).click(function(){
  $("#output").toggleClass("special");
  });

//add class "special" to each div
$(challengeButton).addClass("special");
$(resultButton).addClass("special");
$(outputButton).addClass("special");
