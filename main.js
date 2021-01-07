$(document).ready(function(){

  var range = 1770;
//for getting beginning values
var windowW = $(window).height();
var windowH = $(window).width();
console.log(windowW+'X'+windowH);

//for getting current values
// $(window).on('resize', function(){
$(window).resize(function(){
   var windowW = $(this).height();
   var windowH = $(this).width();
   console.log(windowW+'X'+windowH);
   if( windowH > range ) {
      $('.special-item').show();
   }else{
      $('.special-item').hide();
   }
 });
});
