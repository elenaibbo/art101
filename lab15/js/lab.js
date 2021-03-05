/**
 * Author:    Elena Ibbetson
 * Created:   March 3 2021
 *
 * Public Domain
 **/

//ajax function to get a dad joke
function callAjax() {
  $.ajax({
    url: "https://icanhazdadjoke.com/",
    data: {},
    type: "GET",
    dataType: "json",
    success: successFun,
    error: failFun,
    complete: function (xhr, staus){
      console.log("request is complete");
    }
  });
}
//success function
function successFun(result){
  console.log(result);
  $("#text").html(result.joke);
}
//fail function
function failFun(xhr, status, strErr){
  console.log("error");
}
//add click event
$("#activate").click(callAjax);
