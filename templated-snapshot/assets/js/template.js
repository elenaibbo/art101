//make button submit input from the form field to the section "contact"
function submitBio() {
  var nameVar = document.getElementById("name").value;
  console.log(nameVar);
  var emailVar = document.getElementById("email").value;
  console.log(emailVar);
  var messageVar = document.getElementById("message").value;
  console.log(messageVar);
  document.getElementById("name_email_id").innerHTML = nameVar + " EMAIL: " + emailVar;
  document.getElementById("bio_id").innerHTML = messageVar;
}
document.getElementById("bio_submit_id").addEventListener('click',submitBio);


// //make button change p color
// function colorMe() {
//   // document.getElementById("name_email_id").style.color= "green";
//   document.getElementById("name_email_id").className+=""+"color_me"
// }
// document.getElementById("color_button").addEventListener('click', colorMe);

//make button change p color with jquery
$("#color_button").click(function(){
  $("#name_email_id").toggleClass("color_me");
});
