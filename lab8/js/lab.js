/**
 * Author:    Elena Ibbetson
 * Created:   8 Feb 2021
 *
 **/

 //name functions

 function firstThing(test) {
   console.log(test + " this is from the first function");
 }

 function secondThing(test) {
   console.log(test + " this is from the second function");
 }

 function thirdThing(test) {
   console.log(test + " this is from the third function");
 }

//test 1
 firstThing("TEST 1")
 secondThing("TEST 1")
 thirdThing("TEST 1")

 //test 2 with setTimeout
 setTimeout(function(){
   firstThing("TEST 2");
 }, 0);
 setTimeout(function(){
   secondThing("TEST 2");
 }, 0);
 setTimeout(function(){
   thirdThing("TEST 2");
 }, 0);

 //test 3
 setTimeout(function(){
   firstThing("TEST 3");
 }, 4000);
 setTimeout(function(){
   secondThing("TEST 3");
 }, 2000);
 setTimeout(function(){
   thirdThing("TEST 3");
 }, 3000);
