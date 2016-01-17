jQuery(document).ready(function($){

  // // Parallax
  // if ($('.parallax-background').length) {
  //   $(".parallax-background").parallax();
  // }
  
  // // Parallax
  // if ($('.parallax-background-sponsors').length) {
  //   $(".parallax-background-sponsors").parallax();
  // }  
  
  
  // Scroll +1px - big fix
  $(window).scrollTop($(window).scrollTop()+1);
  
  
  // niceScroll
  $("html").niceScroll();
    
    
  // Stick menu
  $(".menu").sticky({topSpacing:0});




  // Menu Scroll to content and Active menu
  var lastId,
    topMenu = $("#menu"),
    topMenuHeight = topMenu.outerHeight()+105,
    menuItems = topMenu.find("a"),
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

   $('a[href*=#]').bind('click', function(e) {
	e.preventDefault();
       
	var target = $(this).attr("href");
			

	$('html, body').stop().animate({ scrollTop: $(target).offset().top-140 }, 1000, function() {

	});
			
	return false;
   });

  $(window).scroll(function(){
   var fromTop = $(this).scrollTop()+topMenuHeight;
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });

   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       menuItems
         .parent().removeClass("active")
         .end().filter("[href=#"+id+"]").parent().addClass("active");
   }                   
  });  
  

  //team - expanded view
  var i = 1;

  $('.team .read-more').click(function() {
    if(i%2 != 0){
      $('.team .read-more').text('Load less');
    }
    else{
      $('.team .read-more').text('Load more');
    }
    i++;

    $('.team .hidden').slideToggle(1000);
  });

  //vehicle - opacity
  $('.grid .text').hover(
    function () {
      $(this).animate({opacity:'1'});
    },
    function () {
      $(this).animate({opacity:'0'});
    }
  );


  //vehicle - carousel
  $('.grid .text').click(function() {
    $('.work-belt').css('left','-100%');
    $('.work-container').show();
  });

  $('.work-return').click(function() {
    $('.work-belt').css('left','0%');
    $('.work-container').hide(800);
  });

  $('.grid .mechanical').click(function() {
    $('.work-container .mechanical').show();
    $('.work-container .electrical').hide();
    $('.work-container .software').hide();
  });

  $('.grid .electrical').click(function() {
    $('.work-container .mechanical').hide();
    $('.work-container .electrical').show();
    $('.work-container .software').hide();
  });

  $('.grid .software').click(function() {
    $('.work-container .mechanical').hide();
    $('.work-container .electrical').hide();
    $('.work-container .software').show();
  });


  if ( $(window).width() > 1023) {     

    tiles = $("p, h1, h2, h3, .column-one, .column-two, .column-three, .start-page .content .text, hr, .grid li, .contact .content .form, .contact .content .contact-text ").fadeTo(0, 0);

    $(window).scroll(function(d,h) {
      tiles.each(function(i) {
          a = $(this).offset().top + $(this).height();
          b = $(window).scrollTop() + $(window).height();
          if (a < b) $(this).fadeTo(1000,1);
      });
    });

  }
  else {
  }


  //Menu mobile click
  $( ".icon" ).click(function() {
    $( " ul.menu-click" ).slideToggle( "slow", function() {
    // Animation complete.
    });
  });

  
});
