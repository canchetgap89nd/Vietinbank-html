$( document ).ready(function() {
    $(".car").click(function(){
        $(".car-zoom1").show();
    })
    $(".btn-close").click(function(){
        $(".car-zoom1").hide();
    });
    

    $(".car2").click(function(){
        $(".car-zoom2").show();
    })
    $(".btn-close").click(function(){
        $(".car-zoom2").hide();
    });



    $(".health1").click(function(){
        $(".health-zoom1").show();
    })
    $(".btn-close").click(function(){
        $(".health-zoom1").hide();
    });
    

    $(".health2").click(function(){
        $(".health-zoom2").show();
    })
    $(".btn-close").click(function(){
        $(".health-zoom2").hide();
    });

   

    $(".house1").click(function(){
        $(".house-zoom1").show();
    })
    $(".btn-close").click(function(){
        $(".house-zoom1").hide();
    });
    
    $(".house2").click(function(){
        $(".house-zoom2").show();
    })
    $(".btn-close").click(function(){
        $(".house-zoom2").hide();
    });


    $(".box1").click(function(){
        $(".box-zoom1").show();
    })
    $(".btn-close").click(function(){
        $(".box-zoom1").hide();
    });

    $(".box2").click(function(){
        $(".box-zoom2").show();
    })
    $(".btn-close").click(function(){
        $(".box-zoom2").hide();
    });

    $(".other").click(function(){
        $(".other-zoom").show();
    })
    $(".btn-close").click(function(){
        $(".other-zoom").hide();
    });


    $(".wrap").mouseup(function(e) // event click out site car-zoom
    {
        var subject = $(".circle-zoom"); 

        if(e.target.id != subject.attr('id') && !subject.has(e.target).length)
        {
                
            subject.hide();                           
        }
    });

    //js animation btn scroll
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 800, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});
$(".item-scroll").focus(function(){
  $(this).css("color","blue");
});
//END js animation btn scroll
// scroll 100vh


function ScrollHandler(pageId) { 
    var page = $('#' + pageId); //id page
    var pageStart = page.offset().top;
    var pageJump = false;
  
    function scrollToPage() {
      pageJump = true;
        $('html,body').animate(
        { scrollTop: pageStart }, 
        {
        duration: 500,
        complete: function() {
          pageJump = false;
        }
      });  
    }
    window.addEventListener('wheel', function(event) {
     var viewStart = $(window).scrollTop();
     if (!pageJump) { 
        var pageHeight = page.height();
        var pageStopPortion = pageHeight/2;
        var viewHeight = $(window).height();
  
        var viewEnd = viewStart + viewHeight;
        var pageStartPart = viewEnd - pageStart;
        var pageEndPart = (pageStart + pageHeight) - viewStart;
        
        var canJumpDown = pageStartPart >= 0; 
        var stopJumpDown = pageStartPart > pageStopPortion; 
        
        var canJumpUp = pageEndPart >= 0; 
        var stopJumpUp = pageEndPart > pageStopPortion; 
  
        var scrollingForward = event.deltaY > 0;
        if (  ( scrollingForward && canJumpDown && !stopJumpDown) 
           || (!scrollingForward && canJumpUp   && !stopJumpUp)) {
          event.preventDefault();
          scrollToPage();
        } 
     } else {
       event.preventDefault();
     }    
    //  console.log($(window).height() +viewHeight);
    });
  }
  new ScrollHandler('first-body'); 
  new ScrollHandler('second-body');
  new ScrollHandler('third-body');
  new ScrollHandler('footer');
// end scroll 100vh
// add class menu 
    $(document).ready(function(){
jQuery(function($) {

    var $nav = $('.wrap-menu'),
        $win = $(window),
        winH = $win.height();    // Get the window height.

    if($(window).scrollTop()==winH){
        $nav.addClass("classScroll");
        // console.log("a");
    }
    if($(window).scrollTop()==winH+winH){
        $nav.addClass("classScroll2");
    }
   
    else if($(window).scrollTop()==winH-winH){
        $nav.addClass("classScroll3");
    }
    else    
        $nav.addClass("classScroll");

    $win.on("scroll", function () {
        if($(window).scrollTop()==winH-winH){
            $nav.removeClass("classScroll");
            $nav.removeClass("classScroll2");

            $nav.addClass("classScroll3");

        }
        else if($(window).scrollTop()==winH+winH){   
            $nav.removeClass("classScroll");
            $nav.removeClass("classScroll3");

            $nav.addClass("classScroll2");
        }
        else{
            $nav.removeClass("classScroll2");
            $nav.removeClass("classScroll3");

            $nav.addClass("classScroll");
        }
    }).on("resize", function(){ // If the user resizes the window
       winH = $(this).height(); // you'll need the new height value
    });
});

});
});