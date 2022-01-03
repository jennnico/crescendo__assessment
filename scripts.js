$(document).ready(function() {

  $(window).scroll(function(){

    /*Sticky nav*/
    var $this = $(this);
    var headerHeight = $('.panel--heading').outerHeight();

    if($this.scrollTop() > headerHeight - 200){
        nav.addClass("sticky");
    } else{
        nav.removeClass("sticky");
    } /*sticky-nav*/

  }); /*window scroll*/


//Hamburger
var nav = $('.navigation');
var stickyNav = $('.sticky');
var mobileNav = $('.navigation__items');
// var home = $('#home');//main header text

$('.navigation__burger').click(function(){

  //toggle mobile nav and rhombuses
  if((mobileNav).hasClass('mobile-nav')){

    mobileNav.removeClass('mobile-nav').animate({right: "-100%"});
    $('body').css("overflow", "auto");

    setTimeout(function () {
         $('.navigation.sticky').removeClass('sticky--show');
    }, 300);

  }else{

      $('.navigation.sticky').addClass('sticky--show');
      mobileNav.addClass('mobile-nav').animate({right: "0"});
      $('body').css("overflow", "hidden");

      //Close nav when the user makes a selection
      $('a').click(function(){
        $('.navigation.sticky').removeClass('sticky--show');
        mobileNav.removeClass('mobile-nav').animate({right: "-100%"});
        $('body').css("overflow", "auto");
      });//a element click

  }//else

}); //Hamburger


})
