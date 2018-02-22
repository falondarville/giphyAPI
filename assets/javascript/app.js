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
	$("#buttons").append("<button class='btn'>" + topics[y] + "</button>");
	};
};

//when user clicks on button, they get 10 static images from giphy

//add a form that takes value from user and adds it to topics array, then shows button


// for(var x = 0; x < topics.length; x++) {

// 	console.log(topics[x]);

// 	//giphy ajax call
// 	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topics[x] + "&api_key=8bvrXfOVZnPW3TMYuEFO8jRewu4AXh3U&limit=10&rating=g";

// 	$.ajax({
// 		url: queryURL,
// 		method: "GET"
// 	}).then(function(response) {

// 		// $("#giphy").append
// 	});
// };

appendButton();

});


