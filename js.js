
$(document).ready(function(){
	//var i= 0 ;

//var array1=['#im1','#im2','#im3','#im4','#im5','#im6','#im7','#im8','#im9','#im10','#im11','#im12'];
//var array2=['#info1','#info2','#info3','#info4','#info5','#info6','#info7','#info8','#info9','#info10','#info11','#info12'];
	$('.next').on('click',function(){
		$('.info').hide();
		var imgActive = $('.active');
		var imgNext =imgActive.next();

		if(imgNext.length){
			//i++ ;
			imgActive .removeClass('active').css('z-index',-10);
			imgNext.addClass('active').css('z-index',10);

		}
		//return false ;
	});

   $('.prev').on('click',function(){
   	$('.info').hide();
		var imgActive = $('.active');
		var imgPrev =imgActive.prev();

		if(imgPrev.length){
			//i--;
			imgActive.removeClass('active').css('z-index',-10);
			imgPrev.addClass('active').css('z-index',10);
		}
		//return false ;
	});

  $('#icon').on('click',function(){
      $('#cart').toggle(500)
  })
  $('#cart').hide();
  $('.info').hide();
   $('#im1').on('click',function(){
   	$('#info1').fadeIn(400);
   	$('#bt').fadeIn(400);
         $('#info1 #bt').on('click',function(){
            $('#cart').append('<br>');
            $('#cart').append('Address: 17 Ebn kholdoun Street Ariena Soghra--(+216 53 261 408)');
            $('#cart').append('<br>');

   })
   	
   })
   
   $('#im2').on('click',function(){
   	$('.info').hide();
   	$('#info2').fadeIn(400);
   	$('#bt').fadeIn(400);
      $('#info2 #bt1').on('click',function(){
      $('#cart').append('Address:72 Maroc Street Gazella--(+216 20 253 148)');
      $('#cart').append('<br>');

   })

   })
   $('.info').hide();
   $('#im3').on('click',function(){
   $('#info3').fadeIn(400);
   $('#bt').fadeIn(400);
   $('#info3 #bt2').on('click',function(){
      $('#cart').append('Address: 36 Espagne Street Ariena Soghra--(+216 90 162 635)');
      $('#cart').append('<br>');

   })
   })
   $('.info').hide();
   $('#im4').on('click',function(){
   $('#info4').fadeIn(400);
   $('#bt').fadeIn(400);
   $('#info4 #bt3').on('click',function(){
      $('#cart').append('Address: 13 Zouhour Street Gazella--(+216 58 120 035)');
      $('#cart').append('<br>');

   })
   })
   $('.info').hide();
   $('#im5').on('click',function(){
   $('#info5').fadeIn(400);
   $('#bt').fadeIn(400);
      $('#info5 #bt4').on('click',function(){
      $('#cart').append('Address: 43 England Street Ariena Soghra--(+216 25 184 609)');
      $('#cart').append('<br>');

   })
   })
   $('.info').hide();
   $('#im6').on('click',function(){
   $('#info6').fadeIn(400);
   $('#bt').fadeIn(400);
   $('#info6 #bt5').on('click',function(){
      $('#cart').append('Address: 22 Salem Street Gazella--(+216 55 601 403)');
      $('#cart').append('<br>');

   })
   })
   $('.info').hide();
   $('#im7').on('click',function(){
   $('#info7').fadeIn(400);
   $('#bt').fadeIn(400);
   $('#info7 #bt6').on('click',function(){
      $('#cart').append('Address: 18 Bechir sfar Street Ariana Soghra--(+216 92 117 563)');
      $('#cart').append('<br>');

   })
   })
   $('.info').hide();
   $('#im8').on('click',function(){
   $('#info8').fadeIn(400);
   $('#bt').fadeIn(400);
   $('#info8 #bt7').on('click',function(){
      $('#cart').append('Address: 46 Nozha Street Ariana Soghra--(+216 96 127 830)');
      $('#cart').append('<br>');

   })
   })
   $('.info').hide();
   $('#im9').on('click',function(){
   $('#info9').fadeIn(400);
   $('#bt').fadeIn(400);
   $('#info9 #bt8').on('click',function(){
      $('#cart').append('Address: 23 Amel Street Gazella--(+216 23 618 427)');
      $('#cart').append('<br>');

   })
   })
   $('.info').hide();
   $('#im10').on('click',function(){
   $('#info10').fadeIn(400);
   $('#bt').fadeIn(400);
   $('#info10 #bt9').on('click',function(){
      $('#cart').append('Address: 17 Wouroud Street Ariana Soghra--(+216 25 481 275)');
      $('#cart').append('<br>');

   })
   })
   $('.info').hide();
   $('#im11').on('click',function(){
   $('#info11').fadeIn(400);
   $('#bt').fadeIn(400);
   $('#info11 #bt10').on('click',function(){
      $('#cart').append('Address: 13 Borguiba Street Gazella--(+216 96 315 824)');
      $('#cart').append('<br>');

   })
   })
   $('.info').hide();
   $('#im12').on('click',function(){
   $('#info12').fadeIn(400);
   $('#bt').fadeIn(400);
   $('#info12 #bt11').on('click',function(){
      $('#cart').append('Address: 5 New Street Gazella--(+216 25 143 678)');
      $('#cart').append('<br>');

   })
   })
 
})