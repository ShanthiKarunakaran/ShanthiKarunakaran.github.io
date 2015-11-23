$(document).ready(function(){
	//Create a JSON object : holds an array called quotes
	var quotesList = {"quotes": [
			{
				"quote": "Don't cry because it's over, smile because it happened.",
				"author": "Dr. Seuss"
			},
			{
				"quote": "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
				"author": "Marilyn Monroe"
			},
			{
				"quote": "Be yourself; everyone else is already taken.",
				"author": "Oscar Wilde"
			}
	]};
	$.fn.randomize = function(quotesList) {
		var quote = "",
				author = "",
				quoteLen = quotesList.quotes.length,
				quoteNumber = Math.floor(Math.random() * quoteLen);
		return {
				quote: quotesList.quotes[quoteNumber].quote ,
				author: quotesList.quotes[quoteNumber].author
		}
	};
	(function ($) {
	    $.extend({
	        generateQuoteAndAuthor: function () {
	        	var randomQuoteAndAuthor = $('.quote').randomize(quotesList);

	           	$('.quote').html("<h1>" + randomQuoteAndAuthor.quote + "" + "</h1>" + "<br />" + "<h3>" + randomQuoteAndAuthor.author + "" + "</h3>");
	        }
	    });
	})(jQuery);

	var genQuotes = $.generateQuoteAndAuthor();

	$('#generateQuote').click(function(){
		$.generateQuoteAndAuthor();
	});
});