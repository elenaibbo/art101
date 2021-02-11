/**
* Authors: Tristan Dunlop <tdunlop@ucsc.edu>
        and Elena Ibbetson <eibbetso@ucsc.edu>
 * Created:   11 Feb. 2021
 * License:   Public Domain
 **/

//make output variable that gets id
  var outputEl = document.getElementById("output");

//make new elements to add to outputEl
  var new1El = document.createElement("p");
  var new2El = document.createElement("p");
  var new3El = document.createElement("p");

//add text to new elements
  new1El.innerHTML = "This is the first new element!";
  new2El.innerHTML = "This is the second element!";
  new3El.innerHTML = "This is the 3rd element placed at the top of the div element!";

//attach new elements to outputEl
  outputEl.appendChild(new1El);
  outputEl.appendChild(new2El);
  outputEl.prepend(new3El);

//change css of elements
  document.getElementById("content").style.backgroundColor = "pink";
  document.getElementById("output").style.backgroundColor = "green";

  document.getElementById("content").style.color = "green";
  document.getElementById("output").style.color = "pink";

  document.getElementById("p2").style.fontSize = "25px";
