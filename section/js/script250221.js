//keypress
//substring
//change boarder color when text is entered

var original_text= $("#original_text p").text();
console.log(original_text);

function matchText(){
  var input_text = $("#input_text").val();
  console.log(input_text);
  var substringMatch = original_text.substring(0, input_text.length)
  console.log(substringMatch);
  if (input_text==original_text){
    $("#input_text").css("border-color","green");
  }
  else if (input_text==substringMatch){
    $("#input_text").css("border-color","blue");
  }
  else {
    $("#input_text").css("border-color","red");
  }

  //condition 1. text matching but not finished- blue
  //condition 2. text not matching- red
  //condition 3. text matching total original - green
}
$("#input_text").keyup(matchText);
