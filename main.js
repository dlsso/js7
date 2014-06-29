$(window).bind("load", function() {

  var metricsHidden = true
  var scrollLast = $(window).scrollTop()
  var scrollDistance = 0

	$("#show-hide").on('click', function() {
		var btnHeight = $("#show-hide").height() + 20
		if(metricsHidden){
			$("#metrics-content").removeAttr('id')
			$("#metrics").animate({height:"100%"});
			$("#show-hide").html("Hide Metrics");
			metricsHidden = false;
		}
		else{
			$("#metrics").animate({height:btnHeight});
			$("#show-hide").html("Show Metrics");
			metricsHidden = true;			
		}
	})

	
	$("#show-hide").one('click', function() {
		var time = 0
		setInterval(function(){
			time = time + 1
			if(time%60<10){
				seconds = "0" + time%60
			}
			else{
				seconds = time%60
			}

			$("#timer").html( Math.floor(time/60)+":"+ seconds + " minutes ago.")
		},1000);
	})
	
	
	$(document).on( 'scroll', function(){
    	scrollPercent = Math.round(($(window).scrollTop()/($(document).height() - $(window).height()))*100);
    	$("#scroll-percent").html(scrollPercent + " %")

    	if( $(window).scrollTop() - scrollLast > 0){
    		scrollDistance = scrollDistance + ($(window).scrollTop() - scrollLast)
    	}
    	else{
    		scrollDistance = scrollDistance + (scrollLast - $(window).scrollTop())
    	}

    	$("#scroll-distance").html(scrollDistance + " pixels")


    	

	});


	var time = 0
	setInterval(function(){
		time = time + 1
		if(time%60<10){
			seconds = "0" + time%60
		}
		else{
			seconds = time%60
		}

		$("#page-timer").html( Math.floor(time/60)+":"+ seconds + " minutes ago.")
	},1000);





});