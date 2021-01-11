$(document).ready(function(){

//for getting beginning values
var windowW = $(window).width();
var container = $(".grid").height();
console.log(windowW);
console.log(container);

// intructions to display looks depending on height grid container

if (windowW > 930) {

    if (container = 490) {
      $('.look-box.special-item-0').show();
    };

    if (container > 1490) {
      $('.look-box.special-item-0').show();
      $('.look-box.special-item-1').show();
    };

    if (container > 2990) {
      $('.look-box.special-item-2').show();
    };

    if (container > 4490) {
      $('.look-box.special-item-3').show();
    };

    if (container > 5990) {
      $('.look-box.special-item-4').show();
    };

    if (container > 7490) {
      $('.look-box.special-item-5').show();
    };
  //
  // if (container > 11990) {
  //  $('.look-box.special-item-5').show();
  // };

  var windowW = $(window).width();
  var container = $(".grid").height();
  console.log(windowW);
  console.log(container);

}

});
