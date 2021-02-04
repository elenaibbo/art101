/**
 * Author:    Elena Ibbetson
 * Created:   3 February 2021
 *
 **/


var userName = prompt("Howdy! please enter your name so I can rearrange it");
//create function to get user's name
function sortUserName() {
  console.log("userName =", userName);
  //make name an array
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
  //sort array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);
  //reverse sorted array
  var nameArrayReverse = nameArraySort.reverse();
  console.log("nameArrayReverse =", nameArrayReverse);
  // join reverse sorted array for new name
  var nameSort = nameArrayReverse.join('');
  console.log("nameSort =", nameSort);
  return nameSort;
}

//output
document.writeln("Thanks! Here's your new name: ", sortUserName(), "</br>");
