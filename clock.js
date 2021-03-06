		//绘制指针走表
    	function drawClock(){
	    	var now = new Date();
	    	var h = now.getHours()%12;
	    	var m = now.getMinutes();
	    	var s = now.getSeconds();
	    	var hour = document.getElementsByClassName("hour")[0];
	    	hour.style.transform="rotate("+(30*h-90)+"deg)";
	    	var minute = document.getElementsByClassName("minute")[0];
	    	minute.style.transform="rotate("+(6*m-90)+"deg)";
	    	var second = document.getElementsByClassName("second")[0];
	    	second.style.transform="rotate("+(6*s-90)+"deg)";
    	}
    	drawClock();
		window.setInterval(drawClock,1000);
		
		//数字表
		function drawMilliClock(){
			var now = new Date();
	    	var h = now.getHours();
	    	var m = now.getMinutes();
	    	var s = now.getSeconds();
			m = m<10? "0"+m:m;
	    	s = s<10? "0"+s:s;
	    	document.getElementsByClassName("milliClock")[0].innerHTML = h+":"+m+":"+s;
		}
		drawMilliClock();
		var time1 = null;
		function startClock(){
			time1 = setInterval(drawMilliClock,1000);
		}
		function pauseClock(){
			if(time1){
				clearInterval(time1);
			}
		}
		
		
		//计时器，每十毫秒计数一次，counter以十毫秒为单位
		var counter = 0;
		function drawCounterClock(){
			counter++;
			var m = parseInt(counter/6000);//分位数
			m = m<10?"0"+m:m;
			var s = parseInt((counter/100)%60);//秒位数
			s = s<10?"0"+s:s;
			var milli = parseInt(counter%100);//十倍毫秒位数
			milli = milli<10?"0"+milli:milli;
			document.getElementsByClassName("counterClock")[0].innerHTML = m+":"+s+":"+milli;
			
		}
		var time2 = null;
		function startCounter(){
			if(!time2){
				time2=setInterval(drawCounterClock,10);
			}
		}
		function stopCounter(){
			if(time2){
				clearInterval(time2);
				time2 = null;
			}
		}