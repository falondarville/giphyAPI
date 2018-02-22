$(document).ready(function() {

var topics = ["pandas", "turtles", "cats", "lions"];

$("#addSearch").on("click", function(event) {
	event.preventDefault();

	var newTopic = $("#user-input").val().trim();

	topics.push(newTopic);

	appendButton();
});

//append buttons
function appendButton() {

	$("#buttons").empty();

	for(var y = 0; y < topics.length; y++) {
	$("#buttons").append("<button class='btn' data-name=" + topics[y] + ">" + topics[y] + "</button>");
	};
};

//when user clicks on button, they get 10 static images from giphy
function displayGiphys() {

	var topic = $(this).attr("data-name");

	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topics[x] + "&api_key=8bvrXfOVZnPW3TMYuEFO8jRewu4AXh3U&limit=10&rating=g";

	$.ajax({
		url: queryURL,
		method: "GET"
	}).then(function(response) {

		// $("#giphy").append
	});
};

appendButton();

});


