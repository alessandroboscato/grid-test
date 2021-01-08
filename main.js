$(document).ready(function(){

  // change this value to chose the range you want to disappear the look
  var range = 1770;
//for getting beginning values
var windowH = $(window).height();
var windowW = $(window).width();
var container = $(".grid").height();
console.log('width: '+windowW+' height: '+windowH);
console.log(container);

if (windowW < 1769) {
  if (container > 1990) {
    $('.special-item-1').show();
    if (container > 3990) {
      $('.special-item-2').show();
      if (container > 5990) {
        $('.special-item-3').show();
        if (container > 7990) {
          $('.special-item-4').show();
          if (container > 11990) {
            $('.special-item-5').show();
          }
        }
      }
    }
  }
} else {

}

//for getting current values
// $(window).on('resize', function(){
$(window).resize(function(){
   var windowH = $(this).height();
   var windowW = $(this).width();
   console.log(windowW+'X'+windowH);
   // if( windowH < range ) {
   //    $('.special-item-2').hide();
   // }else{
   //    $('.special-item-2').show();
   // }
 });
});
