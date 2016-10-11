

$(function(){
	$('#last').hide();
	$('#final').hide();
	
		
});





$(function(){
	$('#button1').on('click',function(){
		//$('#slideshow').show();

$("#slideshow > div:gt(0)").hide();
setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
},  1500);


});
});

$(function(){
	$('#button2').on('click',function(){
		$('#button1').hide();
		$('#slideshow').hide();
		$('#last').show();
		$("#final").show();
		$(function(){


$('#button6').on('click',function(){
		

		$('#button3').hide();
		$('#button4').hide();
		$('#button5').hide();
		$('#button7').hide();
		$('#button8').hide();
		alert('GREAT! YOU ARE RIGHT!');

		});
});

$(function(){
		$("#button3").on('click',function(){
		
		$('#button6').hide();
		$('#button4').hide();
		$('#button5').hide();
		$('#button7').hide();
		$('#button8').hide();
		alert('NAH! THIS IS NOT AS SIMPLE AS ONE WOULD THINK!');
		});
	});

$(function(){


		$("#button4").on('click',function(){
		
		$('#button3').hide();
		$('#button6').hide();
		$('#button5').hide();
		$('#button7').hide();
		$('#button8').hide();
		alert('NAH! THIS IS NOT AS SIMPLE AS ONE WOULD THINK!');
		});
	});

$(function(){
		$("#button5").on('click',function(){
		
		$('#button3').hide();
		$('#button4').hide();
		$('#button6').hide();
		$('#button7').hide();
		$('#button8').hide();
		alert('NAH! THIS IS NOT AS SIMPLE AS ONE WOULD THINK!');

		});

});
$(function(){
		$("#button7").on('click',function(){
		
		$('#button3').hide();
		$('#button4').hide();
		$('#button5').hide();
		$('#button6').hide();
		$('#button8').hide();
		alert('NAH! THIS IS NOT AS SIMPLE AS ONE WOULD THINK!');

		});
	});
$(function(){
		$("#button8").on('click',function(){
		
		$('#button3').hide();
		$('#button4').hide();
		$('#button5').hide();
		$('#button7').hide();
		$('#button6').hide();
		alert('NAH! THIS IS NOT AS SIMPLE AS ONE WOULD THINK!');

		});
	});		
		
		
	
	
	});
	});
	
