$(function() {
    $.fn.scrollToTop = function() {
     $(this).hide().removeAttr("href");
     if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")
     var scrollDiv = $(this);
     $(window).scroll(function() {
      if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
      else $(scrollDiv).fadeIn("slow")
     });
     $(this).click(function() {
         $("html, body").animate({scrollTop: 0}, 1500)
     })
    }
   });
   $(function() {
    $("#go-top").scrollToTop();
   });
   
   
   let blocks = document.querySelectorAll('.header__quote')
    
   let slide = 0;

   function show(slide)
   {
       for(let i=0;i<blocks.length;i++)
       {
           blocks[i].style.display = "none";
       }
       blocks[slide].style.display ="flex"
   }
   function next()
   {
       if(slide+1 < 3){
           slide++
           show(slide)
       }
   }
   function back()
   {
       if(slide-1 >= 0)
       slide--
       show(slide)
   }
   show(slide)