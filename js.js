
$(document).ready(function(){
	$('.next').on('click',function(){
		var imgActive = $('.active');
		var imgNext =imgActive.next();

		if(imgNext.length){
			imgActive .removeClass('active').css('z-index',-10);
			imgNext.addClass('active').css('z-index',10);
		}
	});

   $('.prev').on('click',function(){
		var imgActive = $('.active');
		var imgPrev =imgActive.prev();

		if(imgPrev.length){
			imgActive.removeClass('active').css('z-index',-10);
			imgPrev.addClass('active').css('z-index',10);
		}
	});



  $('.info').hide();
   $('#im1').on('click',function(){
   	$('#info1').fadeIn(400);
   })
})