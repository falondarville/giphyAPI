$(document).ready() {

var topics = {"pandas", "turtles", "cats", "lions"};

//use a loop to append buttons with each of the topics

//when user clicks on button, they get 10 static images from giphy

//each static image includes rating (G, PG, ...)

//add a form that takes value from user and adds it to topics array, then shows button

//giphy ajax call
	//parameters: q, limit, rating
	//switch protocols from http to https
	//giphy api key 8bvrXfOVZnPW3TMYuEFO8jRewu4AXh3U

var queryURL = "api.giphy.com/api_key:8bvrXfOVZnPW3TMYuEFO8jRewu4AXh3U&q=" + topics[i] + "&limit=10&rating=g";

$.ajax {
	url: queryURL,
	method: "GET"
}

};