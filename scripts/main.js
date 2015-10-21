(function () {
  'use strict';

  var querySelector = document.querySelector.bind(document);

  var main = querySelector('.page-content');
  var menuHamb = querySelector('.hamb');
  var navHamb = querySelector('.trigger');
  var stickyHeader = querySelector('.stickyheader');
  var body = querySelector('body');
  var html = querySelector('html');
/*
  function checkPosition() {
    if($(window).scrollTop() > 1){
      $("html, body").animate({ scrollTop: 0 }, "2500");
    }
  };*/

  function closeMenu() {
    menuHamb.classList.remove('cross');
    navHamb.classList.remove('open');
  };
/* 
  function toggleMenu() {
    menuHamb.classList.toggle('cross');
    navHamb.classList.toggle('open');
    //checkPosition();
    body.classList.toggle('preventscroll');
  };
*/
  function toggleMenuSticky(){
    menuHamb.classList.toggle('cross');
    navHamb.classList.toggle('stickynavopen');
    stickyHeader.classList.toggle('stickyopen');
    body.classList.toggle('preventscroll');
    html.classList.toggle('preventscroll');
  };

  menuHamb.addEventListener('click', toggleMenuSticky);
  //menuHambSticky.addEventListener('click', toggleMenuSticky);  

  navHamb.addEventListener('click', function (event) {
    if (event.target.nodeName === 'A' || event.target.nodeName === 'LI') {
      closeMenu();
    }
  });
})();
/*
$(document).ready(function(){

  function checkSticky(){  
    var div = $(".stickynav");
    var header = $(".stickyheader");
    var divtrigger = $("#hambtrigger");
    var pos = divtrigger.position();
    var height = divtrigger.height();

    function addTransition(){
      header.addClass("transitionable");
    };

    $(window).scroll(function () {
     var windowpos = $(window).scrollTop();

     if (windowpos >= (pos.top + 24)) {
       divtrigger.addClass("hambpass");
       div.addClass("stickyvisible");
       header.addClass("show_header_bar");
       setTimeout(addTransition, 20);
     } else {
       divtrigger.removeClass("hambpass");
       div.removeClass("stickyvisible");
       header.removeClass("show_header_bar");
       header.removeClass("transitionable");
     }
     });
    };
    
  checkSticky();

  $(window).resize(function() {
   checkSticky();
  });
});*/