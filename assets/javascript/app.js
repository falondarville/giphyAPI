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
      //loop through images that are retrieved
      for (var i = 0; i < 10; i++) {
        $("#giphy").append(`<div> Rating:${response.data[i].rating}</div>`);
        $("#giphy").append(
          `<img class=loadedImages data-state='still' data-animate=${
            response.data[i].images.downsized.url
          } data-still=${response.data[i].images.downsized_still.url} src=${
            response.data[i].images.downsized_still.url
          }>`
        );
      }
    });
  });

  //onclick function that will change the state of the still giphy
  //when user clicks, the giphy will animate, and when he/she clicks again, the image will go still
  $("#giphy").on("click", ".loadedImages", function() {
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
