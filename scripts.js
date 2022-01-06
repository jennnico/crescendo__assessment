$(document).ready(function() {

  //add sticky nav when you scroll down
  $(window).scroll(function(){

    var $this = $(this);
    var headerHeight = $('.panel--heading').outerHeight(); //find the height

    if($this.scrollTop() > headerHeight - 200){ //calculate the scroll
        nav.addClass("sticky");
    } else{
        nav.removeClass("sticky");
    }

  });


//mobile hamburger
var nav = $('.navigation');
var stickyNav = $('.sticky');
var navItems = $('.navigation__items');
var burger = $('.navigation__burger');


burger.click(function(){

  if((navItems).hasClass('mobile-nav')){ //if the menu is alredy open

    $(this).removeClass('close'); //toggles red X and burger
    navItems.animate({right: "-100%"}); //move navigation over where screen readers can still access it
    setTimeout(function () { //hide nav items BEFORE adjusting styles below
         nav.css("overflow", "hidden"); //prevents horizontal scroll to hidden nav items
         $('body').css("overflow", "visible");
         navItems.removeClass('mobile-nav')
    }, 400);

  } else{ //if the menu is closed

    $(this).addClass('close');
    navItems.addClass('mobile-nav').animate({right: "0"}); //add styles before showing nav items
    nav.css("overflow", "visible");
    $('body').css("overflow", "hidden"); //prevents vertical scroll on mobile nav

  }

}); //burger

//Close nav when the user makes a selection. similar function to clicking the red X.
$('.navigation__items a').click(function(){
    burger.removeClass('close');
    navItems.removeClass('mobile-nav'); //no animation needed
    nav.css("overflow", "hidden");
    $('body').css("overflow", "visible");
});

//tiny slider for insights panel
const insights__slider = tns({
  container: '.insights__list',
  items: 1,
  gutter: 10,
  loop: false,
  mouseDrag: true,

  responsive: {
      560:{
          edgePadding: 40
      },
      700: {
        edgePadding: 139
    },
      860: {
        disable: true
    }

  }
});

//tiny slider for events panel
const events__slider = tns({
  container: '.events',
  items: 1,
  gutter: 10,
  loop: false,
  mouseDrag: true,

  responsive: {
      560:{
          edgePadding: 40
      },
      700: {
        edgePadding: 139
    },
      860: {
        disable: true
    }

  }
});

})
