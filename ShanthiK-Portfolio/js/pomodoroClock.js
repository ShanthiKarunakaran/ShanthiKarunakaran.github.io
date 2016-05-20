$(document).ready(function(){
	//Constructor for Counter
	function Counter(time) {
		//time will either be sessionTime or breakTime(controlled by the Pomo. main object)
		this.counterValue = time;
		this.timerId = null;
	}

	 //inc/dec updates this.counterValue
	Counter.prototype.decrement = function(timerTextId) {
		if(this.counterValue > 1){
			this.counterValue--;
		} else {
			this.counterValue;
		}
		$("#"+timerTextId).text(Math.floor(this.counterValue));
	};

	Counter.prototype.increment = function(timerTextId) {
		if(this.counterValue > 0)
		{
			this.counterValue++;
		} else {
			this.counterValue;
		}
		$("#"+timerTextId).text(this.counterValue);
	};


	//getter method for counter value
	Counter.prototype.getValue = function() {
		return this.counterValue;
	};

	//Constructor for Timer
	function Timer(time,timerId) {
		this.counter = new Counter(time);
		this.remainingTime = 0;

		var myTimer = this;

		$("#"+timerId+"-decrement").click(function(){
			myTimer.counter.decrement(timerId+"-text");
		});
		$("#"+timerId+"-increment").click(function(){
			myTimer.counter.increment(timerId+"-text");
		});
	}

	//get the associated counter value
	Timer.prototype.getCounterValue = function() {
		return this.counter.getValue();
	};

	Timer.prototype.startTimer = function(callback) {
		//from where to start the timer
		//myTimer is a variable reference to either session or break Timer
		var myTimer = this,
			percent = 0;
		this.timerId = setInterval(function(){
			myTimer.remainingTime--;

			//callback with different events : tick, stop, pause, reset
			if(myTimer.remainingTime === 0) {
				myTimer.resetTimer(myTimer.timerId);
				callback(myTimer,"reset");
			} else {
				callback(myTimer,"tick");
			}
		},1000);
	};

	Timer.prototype.resetTimer = function(timerId) {
		clearInterval(timerId);
		//clear the timerId so you know if there is a timer running
		this.timerId = null;
	};

	//On clicking the Pomo. clock based on the timerId we know if the clock is ticking
	Timer.prototype.toggle = function(callback) {
		//if timerId is !=null, we know that the clock is ticking, if so pause(clearInterval)
		if(this.timerId != null) {
			this.resetTimer(this.timerId);
		} else {
			//if(this.remainingTime === 0) {
				//convert to secs.
				this.remainingTime = this.getCounterValue() * 60;
			//}
			this.startTimer(callback);
		}
	};


	//pomodoroClock Main object
	var pomodoroClock = {
		//Timer properties
		defaultSessionTime : 25,
		defaultBreakTime: 5,
		isSession : true,

		//instantiate session and break timer
		sessionTimer : new Timer(25,"session"),
		breakTimer : new Timer(5,"break"),

		activeTimer : null,
		activeTimerMsg : " ",
		init : function() {
			this.bindEvents();
			//set active timer by default to sessiontimer
			this.activeTimer = this.sessionTimer;
		},
		bindEvents : function() {
			$("#break-text").text(this.defaultBreakTime);
			$("#session-text").text(this.defaultSessionTime);
			$("#pomobtn").click(function(){
				pomodoroClock.activeTimer.toggle(pomodoroClock.callback);
			});
		},
		startActiveTimer : function() {
			pomodoroClock.activeTimer.toggle(pomodoroClock.callback);
		},
		pauseTimer : function() {
			console.log("paused");
		},
		callback : function(timer,event) {
			switch (event) {
				case 'tick' :
					$("#pomobtntext").text(pomodoroClock.formatTime(timer.remainingTime));
					break;
				case 'reset' :
					if(timer == pomodoroClock.sessionTimer) {
						pomodoroClock.activeTimerMsg = "Break";
						pomodoroClock.activeTimer = pomodoroClock.breakTimer;
					}else {
						pomodoroClock.activeTimerMsg = "Session";
						pomodoroClock.activeTimer = pomodoroClock.sessionTimer;
					}
					$("#pomobtn h2").text(pomodoroClock.activeTimerMsg);
					pomodoroClock.startActiveTimer();
					$("#pomobtntext").text(pomodoroClock.formatTime(pomodoroClock.activeTimer.remainingTime));
					break;
				default :
					console.log("default");
			}
		},
		//format a number in seconds into a time string mm:ss
		formatTime : function(remainingTime) {
			var min = Math.floor(remainingTime/60);

			var sec = remainingTime % 60;
			var formattedTime = "";

			if(min < 10) {
				formattedTime =  "00" + min + ":";
			} else {
				formattedTime = min + ":";
			}

			if(sec < 10) {
				formattedTime = formattedTime + "0" + sec;
			} else {
				formattedTime = formattedTime + sec;
			}
			return formattedTime;
		}
	};
	pomodoroClock.init();
});