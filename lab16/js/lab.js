/**
* Author: Elena Ibbetson
* Created: 8 March 2021
*
* Public Domain
**/

//ajax function to get web comic
var comicObj= function() {
  $.ajax({
    url: "https://xkcd.com/500/info.0.json",
    data: {},
    type: "GET",
    dataType: "json",
    success: successFun,
    error: failFun,
    complete: function (xhr, status){
      console.log("request is complete");
    }
  });
}
//load function when page loads
$(document).ready(comicObj);

//success function
function successFun(result){
  console.log(result);
  //stringify the results to add img and h3 tag
  var dataStr= JSON.stringify(result);
  var str= "";
  var image= result.img;
  var title= result.title;
  var caption= result.alt;
  //add value to empty string to put in html
  str += "<h3>'" + title + "'</h3>"
  str += "<img src=" + image + ">";
  str += "<p id='caption'>" + caption + "</p>"
  $("#output").html(str);
}
//fail function
function failFun(xhr, status, strErr){
  console.log("error");
}
