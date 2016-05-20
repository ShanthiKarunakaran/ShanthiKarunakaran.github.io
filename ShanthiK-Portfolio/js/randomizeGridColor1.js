(function(){

	function Square(squareId) {
		this.squareId = squareId; //squareId = property with values 0 to 15
		this.lastTimeChanged = 0;
		this.colors = ["black","white"];
		this.currentColor = 0;
	}

	Square.prototype.changeColor = function() {
		var squareElem = document.getElementById("sq_"+this.squareId),
			currentTime = new Date().getTime();

		//once a square has changed colors, don't change colors till at least 2 secs have passed
		if (this.lastTimeChanged == 0 || currentTime-this.lastTimeChanged > 2000) {
			this.currentColor = this.currentColor?0:1; //flips the color

			squareElem.style.backgroundColor = this.colors[this.currentColor];

			this.lastTimeChanged = currentTime;//save the current time at which it changed

			console.log("lastTimeChanged" + this.lastTimeChanged);
		}

	}

	var randomize = {
		//default properties
		updateInterval : 250,
		pauseTime : 2000,
		generateRandomSquareId : function() {

			var idList = new Array(),
				len = 16;
			//dynamically create an array of square objects
			for(var i = 0; i < len; i++) {
				idList[i] = new Square(i);
			}

			setInterval(function(){

				var randomId = Math.floor(Math.random() * len), //pick a random square obj. from the array of square objects
				squareObj = idList[randomId];

				console.log("randomId" +randomId);
				squareObj.changeColor();
			},this.updateInterval);
		}
	}

	randomize.generateRandomSquareId();

})();
