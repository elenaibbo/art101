// function getAjax(){
// $.ajax({
//   url:"https://en.wikipedia.org/api/rest_v1/page/summary/Main_Page?redirect=true",
//   type:"GET",
//   dataType:"text",
//   success: successFun,
//   error:errorFun,
//   complete:function(xhr, status){
//     console.log("request is complete");
//   }
// });
// }
// function successFun(result){
//   console.log(result);
//   $("#ajax_text").html(result);
// }
// function errorFun(xhr, status, strErr){
//   console.lod("error");
// }
// $("#click_ajax").click(getAjax);

function getAjax(){
$.ajax({
  url:"https://en.wikipedia.org/api/rest_v1/page/title/Warren_G._Harding",
  type:"GET",
  dataType:"json",
  success: successFun,
  error:errorFun,
  complete: function (xhr, staus){
    console.log("request is complete");
  }

});
}
function successFun(result){
  console.log(result);
  $("#ajax_text").html(result.items[0].title);
}
function errorFun(xhr, status, strErr){
  console.log("error");
}
$("#click_ajax").click(getAjax);
