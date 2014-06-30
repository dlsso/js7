$(window).bind("load", function() {

  var metricsHidden = true
  var scrollLast = $(window).scrollTop()
  var scrollDistance = 0

	// Show or hide the metrics panel
	$("#show-hide").on('click', function() {
		var btnHeight = $("#show-hide").height() + 20	// Add 20px to account for padding
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

	// First time click start the bar timer
	$("#show-hide").one('click', function() {

		// Timers work by adding 1 to the timer at 1 second intervals
		// and doing some math to get minutes and seconds
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
	
	// Scroll percent metric
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


	//
	// Time per section metrics in 1000px sections
	//

	var time1=0
	var time2=0
	var time3=0
	var time4=0
	var time5=0
	var time6=0
	var time7=0

	setInterval(function(){
		if($(window).scrollTop()<1000 ){
			time1 = time1 + 1
			if(time1%60<10){seconds1 = "0" + time1%60}
			else{seconds1 = time1%60}

			$("#section1").html("Section 1. " + Math.floor(time1/60)+":"+ seconds1)
		}

		else if($(window).scrollTop()>1000 && $(window).scrollTop()<2000){
			time2 = time2 + 1
			if(time2%60<10){seconds2 = "0" + time2%60}
			else{seconds2 = time2%60}

			$("#section2").html("Section 2. " + Math.floor(time2/60)+":"+ seconds2)
		}

		else if($(window).scrollTop()>2000 && $(window).scrollTop()<3000){
			time3 = time3 + 1
			if(time3%60<10){seconds3 = "0" + time3%60}
			else{seconds3 = time3%60}

			$("#section3").html("Section 3. " + Math.floor(time3/60)+":"+ seconds3)
		}

		else if($(window).scrollTop()>3000 && $(window).scrollTop()<4000){
			time4 = time4 + 1
			if(time4%60<10){seconds4 = "0" + time4%60}
			else{seconds4 = time4%60}

			$("#section4").html("Section 4. " + Math.floor(time2/60)+":"+ seconds4)
		}

		else if($(window).scrollTop()>4000 && $(window).scrollTop()<5000){
			time5 = time5 + 1
			if(time5%60<10){seconds5 = "0" + time5%60}
			else{seconds5 = time5%60}

			$("#section5").html("Section 5. " + Math.floor(time5/60)+":"+ seconds5)
		}

		else if($(window).scrollTop()>5000 && $(window).scrollTop()<6000){
			time6 = time6 + 1
			if(time6%60<10){seconds6 = "0" + time6%60}
			else{seconds6 = time6%60}

			$("#section6").html("Section 6. " + Math.floor(time6/60)+":"+ seconds6)
		}

		else{
			time7 = time7 + 1
			if(time7%60<10){seconds7 = "0" + time7%60}
			else{seconds7 = time7%60}

			$("#section7").html("Section 7. " + Math.floor(time7/60)+":"+ seconds7)
		}
	},1000);

		// Easter egg if you stare at the 2nd "when you see it" for a while and click on it
		$("img[title='No hint']").on('click', function() {
			if(seconds6>30){alert("Yeah, I couldn't find it either.")}
		})

	// Time spent on page
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