/**
 * Author:   Elena Ibbetson
 * Created:   14 February 2021
 *
 **/


//find the button element
var buttonEl = document.getElementById("my-button");

//add an event listener to button
buttonEl.addEventListener("click",function(){
    //find name element
    var nameEl  = document.getElementById("user-name");
    var userName = nameEl.value;
    //modify the name
    userName = userName.toLowerCase().split('').sort().reverse().join('');
    //get output
    console.log("user name", userName);
    outputEL = document.getElementById("output");
    outputEL.innerText = userName;
});

// buttonEl.addEventListener("keyup",function(pressEnter){
//     if (pressEnter.keyCode === 13);
//     //find name element
//     var nameEl  = document.getElementById("user-name");
//     var userName = nameEl.value;
//     //modify the name
//     userName = userName.toLowerCase().split('').sort().reverse().join('');
//     console.log("user name", userName);
//     outputEL = document.getElementById("output");
//     outputEL.innerText = userName;
//   }
// });
