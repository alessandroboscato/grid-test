$(document).ready(function(){

  // $(window).on('load', function() {
  //   console.log("ciao");
  // });

//for getting beginning values
var windowW = $(window).width();
var container = $(".grid").height();
console.log(windowW);
console.log(container);

// intructions to display looks depending on height grid container
if (windowW < 930){
  $('.look-box.special-item-0').hide();
  $('.look-box.special-item-1').hide();
  $('.look-box.special-item-2').hide();
  $('.look-box.special-item-3').hide();
  $('.look-box.special-item-4').hide();
  $('.look-box.special-item-5').hide();
};

if (windowW > 930) {

    if (container > 1990) {
    $('.look-box.special-item-0').show();
    $('.look-box.special-item-1').show();
    $('.look-box.special-item-2').hide();
    $('.look-box.special-item-3').hide();
    $('.look-box.special-item-4').hide();
    $('.look-box.special-item-5').hide();
  };

  if (container > 3990) {
    $('.look-box.special-item-1').show();
   $('.look-box.special-item-2').show();
   $('.look-box.special-item-3').hide();
   $('.look-box.special-item-4').hide();
   $('.look-box.special-item-5').hide();
  };

  if (container > 5990) {
   $('.look-box.special-item-3').show();
   $('.look-box.special-item-4').hide();
   $('.look-box.special-item-5').hide();
  };

  if (container > 7990) {
   $('.look-box.special-item-4').show();
   $('.look-box.special-item-5').hide();
  };

  if (container > 11990) {
   $('.look-box.special-item-5').show();
  };
}



//for getting current values
// $(window).on('resize', function(){
// $(window).resize(function(){
//    var windowH = $(this).height();
//    var windowW = $(this).width();
//    var container = $(".grid").height();
//    console.log(windowW+'X'+windowH);
//    // if( windowH < range ) {
//    //    $('.special-item-2').hide();
//    // }else{
//    //    $('.special-item-2').show();
//    // }
//
//    if (windowW < 1769) {
//      if (container > 1990) {
//
//      $('.look-box.special-item-1').show();
//      $('.look-box.special-item-2').hide();
//      $('.look-box.special-item-3').hide();
//      $('.look-box.special-item-4').hide();
//      $('.look-box.special-item-5').hide();
//    };
//
//    if (container > 3990) {
//     $('.look-box.special-item-2').show();
//     $('.look-box.special-item-3').hide();
//     $('.look-box.special-item-4').hide();
//     $('.look-box.special-item-5').hide();
//      }
//
//      if (container > 5990) {
//       $('.look-box.special-item-3').show();
//       $('.look-box.special-item-4').hide();
//       $('.look-box.special-item-5').hide();
//        }
//    }
//  });
});
