// this function takes the results object from StackOverflow
// and returns the number of results and tags to be appended to DOM
var showSearchResults = function(query, resultNum) {
	var results = resultNum + ' results for <strong>' + query + '</strong>';
	return results;
};

// takes a string of semi-colon separated tags to be searched
// for on StackOverflow
// returns top answerers
var getAnswerers = function(tags) {
	// the parameters we need to pass in our request to StackOverflow's API
	var request = { 
		tagged: tags,
		site: 'stackoverflow',
		period: 'all_time'
	};

	$.ajax({
		url: "http://api.stackexchange.com/2.2/tags/{tag}/top-answerers/{period}",
		data: request,
		dataType: "jsonp",//use jsonp to avoid cross origin issues
		type: "GET",
	})
	console.log(request);
	/*.done(function(result){
		var searchResults = showSearchResults(request.tagged, results.item.length);
		console.log(searchResults)
	})*/	
}

$(document).ready( function() {
	$('.unanswered-getter').submit( function(e){
		e.preventDefault();
		// zero out results if previous search has run
		$('.results').html('');
		// get the value of the tags the user submitted
		var tags = $(this).find("input[name='tags']").val();
		console.log(tags);
		getUnanswered(tags);
	});

	$('.inspiration-getter').submit( function(e){
		e.preventDefault();
		// zero out results if previous search has run
		$('.results').html('');
		//get the value of the answerers the user submitted
		var tags = $(this).find("input[name='answerers']").val();
		console.log(tags);
		getAnswerers(tags);
	})

});