$(document).ready(function(){

  // change this value to chose the range you want to disappear the look
  var range = 1770;
//for getting beginning values
var windowH = $(window).height();
var windowW = $(window).width();
var container = $(".grid").height();
console.log('width: '+windowW+' height: '+windowH);
console.log(container);

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
