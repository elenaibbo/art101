/**
 * Author:    Elena Ibbetson
 * Created:   24 February 2021
 *
 * Public Domain
 **/

var superString= numb;
  for (var numb= 1; numb <= 200; numb++) {
    if (numb % 105 == 0) {
      console.log ("fizzbuzzboom");
      superString += numb + " - FizzBuzzBoom!<br>";
    }
    else if (numb % 15 == 0) {
      console.log ("fizzbuzz");
      superString += numb + " - FizzBuzz!<br>";
    }
    else if (numb % 35 == 0) {
      console.log ("buzzboom");
      superString += numb + " - BuzzBoom!<br>";
    }
    else if (numb % 21 == 0) {
      console.log ("fizzboom");
      superString += numb + " - FizzBoom!<br>";
    }
    //If the number is a multiple of 3, if should print "Fizz!"
    else if (numb % 3 == 0) {
      console.log ("fizz");
      superString += numb + " - Fizz!<br>";
    }
    //If the number is a multiple of 5, it should print "Buzz!"
    else if (numb % 5 == 0) {
      console.log ("buzz");
      superString += numb + " - Buzz!<br>";
    }
    //If the number is a multiple of 7, it should print "Boom!"
    else if (numb % 7 == 0) {
      console.log ("boom");
      superString += numb + " - Boom!<br>";
    }
    else {console.log(numb)
      superString += numb + "<br>";
    }
  };

$("#output").html(superString);
