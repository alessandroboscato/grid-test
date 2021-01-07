$(document).ready(function(){

  var range = 1770;
//for getting beginning values
var windowH = $(window).height();
var windowW = $(window).width();
console.log(windowW+'X'+windowH);

//for getting current values
// $(window).on('resize', function(){
$(window).resize(function(){
   var windowH = $(this).height();
   var windowW = $(this).width();
   console.log(windowW+'X'+windowH);
   if( windowH < range ) {
      $('.special-item-2').hide();
   }else{
      $('.special-item-2').show();
   }
 });
});
