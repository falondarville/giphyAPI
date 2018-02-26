$(document).ready(function() {
  var topics = ["pandas", "turtles", "cats", "lions"];

  appendButton();

  //add user buttons
  $("#addSearch").on("click", function(event) {
    event.preventDefault();

    var newTopic = $("#user-input")
      .val()
      .trim();

    topics.push(newTopic);

    appendButton();
  });

  //append buttons
  function appendButton() {
    $("#buttons").empty();

    for (var y = 0; y < topics.length; y++) {
      $("#buttons").append(
        "<button class='btn' data-name=" +
          topics[y] +
          ">" +
          topics[y] +
          "</button>"
      );
    }
  }

  //when user clicks on button, they get 10 static images from giphy
  $("#buttons").on("click", ".btn", function() {
    $("#giphy").empty();
    var topic = $(this).attr("data-name");

    var queryURL =
      "https://api.giphy.com/v1/gifs/search?q=" +
      topic +
      "&api_key=8bvrXfOVZnPW3TMYuEFO8jRewu4AXh3U&limit=10&rating=g";

    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function(response) {
      //loop through all images
      //issue- same gifs appear regardless of the category I choose
      for (var i = 0; i < topics.length; i++) {
        $("#giphy").append(`<div> Rating:${response.data[i].rating}</div>`);
        $("#giphy").append(
          `<img class=loadedImages data-state='still' data-animate=${
            response.data[i].url
          } data-still=${response.data[i].images.fixed_height_still.url} src=${
            response.data[i].images.fixed_height_still.url
          }>`
        );
      }
      //for testing
      console.log(response.data[0].rating);
      console.log(response.data[1].url);
    });
  });

  //onclick function is not working
  //onclick function that will change the state of the still giphy
  //when user clicks, the giphy will animate, and when he/she clicks again, the image will go still
  $(".loadedImages").on("click", function() {
    console.log("this is working");
    //declares the data-state, which is still by default on loading the page
    var currentState = $(this).attr("data-state");
    //alternate states to allow for still and animate
    if (currentState === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
  });
});
