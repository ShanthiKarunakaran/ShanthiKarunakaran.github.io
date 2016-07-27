//handle search input box functionality
//create a utility object

var wikiUtility = (function(window){

	var sInput = document.querySelector("#sInput"),
		sClose = document.querySelector("#sClose");

	//return wikiUtility object
	return {
		expandSearch: function() {
			//expand the search bar
			sInput.style.width = '300px';
			//show the close button inside the search bar
			wikiUtility.showClose();
		},
		showClose: function() {
			//hide the close button inside the search bar
			wikiUtility.removeClass(sClose,'hide');
			wikiUtility.addClass(sClose,'show');
		},
		reduceSearch: function() {
			//bring search bar to original state
			sInput.style.width = '50px';
		},
		hideClose: function() {
			wikiUtility.removeClass(sClose,'show');
			wikiUtility.addClass(sClose,'hide');
			//clear the search input value
			sInput.value = ' ';
			//clear the wiki list that was populated by the user search
			document.getElementById("results_list").innerHTML = ' ';
		},
		// regexp to test hasClass
		hasClass: function(elem, className) {
			return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
		},
		removeClass: function(elem, className) {
			var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
			if (wikiUtility.hasClass(elem, className)) {
		        while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
		            newClass = newClass.replace(' ' + className + ' ', ' ');
		        }
		        elem.className = newClass.replace(/^\s+|\s+$/g, '');
		    }
		},
		addClass: function(elem, className) {
		    if (!wikiUtility.hasClass(elem, className)) {
		    	elem.className += ' ' + className;
		    }
		}
	}
})(window);

var wikiViewer = {
	wikiURL : "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=",
	init : function() {
		var input = document.getElementById("sInput");
		input.onkeypress = function(e){
		if (!e) e = window.event;
	    	var keyCode = e.keyCode || e.which;
		    if (keyCode == '13'){ //check the Enter key
		    	event.preventDefault();
		    	console.log("value" +document.getElementById("sInput").value);
		    	wikiViewer.getJSONp(document.getElementById("sInput").value);
		    }
		}
	},
	getJSONp : function(user_input) {
		//create and add the script tag which calls the API with the callback function
		var scriptTag = document.createElement('script');
		//since the API returns to a script tag the JS is immediately executed. So callbackF function gets called
		scriptTag.setAttribute("src", wikiViewer.wikiURL+user_input+"&callback=wikiViewer.callbackF");
		document.getElementsByTagName("head")[0].appendChild(scriptTag);
	},
	callbackF : function(data) {
		var responseObj = data.query.search,
			len = responseObj.length,
			newContent = '';
		function generateList() {
			for(var i = 0; i < len ; i++) {
				console.log("title" +responseObj[i].title);
				//build up the string with the newContent (li elements)
				newContent += '<li><a target="_blank" href="https://en.wikipedia.org/wiki/'+responseObj[i].title+'"/"><h1>'+responseObj[i].title+'</h1><p>'+responseObj[i].snippet+'</p></a></li>';
				var results_list = document.getElementById("results_list");
				results_list.innerHTML = newContent;
			}
		}
		//add the list to the wrapper div
		document.getElementById("results").appendChild(results_list);
		generateList();
	},

};

//make the JSON request and populate the page with the data returned from the Wiki API
wikiViewer.init();

//search bar
document.querySelector("#sInput").addEventListener("click",function(){
	wikiUtility.expandSearch();
});

//close button
document.querySelector("#sClose").addEventListener("click",function(){
	wikiUtility.reduceSearch();
	wikiUtility.hideClose();
});

