//Topic 1: clickable flags
  //click on flag images to make text appear
  // $("#prideGayFlag").click(function() {
  //   $("#gayPopUp").toggle();
  // }
  // );
  $(".popuptext").on('click', function () {
      $(this).children(".hidden").toggle();
  });
