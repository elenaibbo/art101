for (var i=0; i<200; i++){
  //code block
  //create 10 divs inside container div w/ class name = "box"
  var boxEl = document.createElement("div");
  boxEl.className = "box"
  //add id to each box that looks like box_id_0, box_id_1,...
  boxEl.id= "box_id_"+(index+1);
  document.getElementById("container").appendChild(boxEl);

  console.log(index);

  // var div = document.createElement("div").appendChild("container");
  // console.log(index);
}

//with jquery
for (var index=0; index<10; index++){
  if (i%2==0){
    $('container').append("<div id= 'box_id_" +i+ "' class='box_even'></div")
  }
  else {
    $('container').append("<div id= 'box_id_" +i+ "' class='box_odd'></div")
  }

}
