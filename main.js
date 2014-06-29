$(document).on('ready', function() {

  var metricsHidden = true

	$("#show-hide").on('click', function() {
		var btnHeight = $("#show-hide").height() + 20
		if(metricsHidden){
			$("#metrics-content").removeAttr('id')
			$("#metrics").animate({height:"100%"});
			$("#show-hide").html("Hide Metrics");
			metricsHidden = false;
		}
		else{
			console.log(btnHeight)
			$("#metrics").animate({height:btnHeight});
			$("#show-hide").html("Show Metrics");
			metricsHidden = true;			
		}


	})


	scrollPercent = ($(window).scrollTop()/($(document).height() - $(window).height()))*100;
	
	$(document).on( 'scroll', function(){
    	scrollPercent = Math.round(($(window).scrollTop()/($(document).height() - $(window).height()))*100);
    	$("#scroll-percent").html(scrollPercent + " %")
	});

	

});