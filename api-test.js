var diffChoice = "";
var catChoice = "";
var questionCounter = 0;
var intervalId;
var correct = 0;
var incorrect = 0;
var unanswered = 0;

$(document).on("click", ".dropdown-item.difficulty",  function(event){
     $(this).text();
      diffChoice = $(this).text().toLowerCase();
     
     console.log(diffChoice);
     
});
$(document).on("click", ".dropdown-item.category", function(event) {
     catChoice = $(this).attr("data-value");
    console.log(catChoice);
});




//var queryURL = "https:opentdb.com/api.php?amount=30&category=18&difficulty=medium&type=multiple"
//var queryURL = "https:opentdb.com/api.php?amount=30&category=" + catChoice + "&difficulty=" + diffChoice + "&type=multiple";
   // console.log(queryURL);

   

$("#launch").on("click", function() {
    var queryURL = "https:opentdb.com/api.php?amount=30&category=" + catChoice + "&difficulty=" + diffChoice + "&type=multiple";
    console.log(queryURL);
$.ajax({
    url: queryURL,
    method: "GET"
  })
  
//   if (questionCounter < 29) {
//      questionCounter++;
     
     
//   }


  .then(function(response) {
      console.log(response)
      console.log(response.results[0].incorrect_answers, response.results[0].correct_answer)
      var answers = [response.results[questionCounter].incorrect_answers[0], response.results[questionCounter].incorrect_answers[1], response.results[questionCounter].incorrect_answers[2], response.results[questionCounter].correct_answer]
        console.log(answers);
        
        // for (i = 0; i < response.results.length; i++) {
        //     console.log(response.results);
        // }

      $("#question").html(response.results[questionCounter].question)
      $("#btn1").html(response.results[questionCounter].incorrect_answers[0]);
      $("#btn2").html(response.results[questionCounter].incorrect_answers[1]);
      $("#btn3").html(response.results[questionCounter].correct_answer);
      $("#btn4").html(response.results[questionCounter].incorrect_answers[2]);
 //});

 $(".btn").on("click", function(){
     var selectedAnswer = $(this).text();

      if (selectedAnswer === response.results[questionCounter].correct_answer) {
          correctChoice();
          console.log("correctChoice");
          
      }

      else {
         incorrectChoice();
         console.log("incorrectChoice");
      }
 });

    function correctChoice() {
        correct++;
        questionCounter++;
        console.log(correct);
      $("#question").html(response.results[questionCounter].question)
      $("#btn1").html(response.results[questionCounter].incorrect_answers[0]);
      $("#btn2").html(response.results[questionCounter].incorrect_answers[1]);
      $("#btn3").html(response.results[questionCounter].correct_answer);
      $("#btn4").html(response.results[questionCounter].incorrect_answers[2]);
    }
    
    function incorrectChoice() {
        incorrect++; 
        questionCounter++;
        console.log(incorrect);
      $("#question").html(response.results[questionCounter].question)
      $("#btn1").html(response.results[questionCounter].incorrect_answers[0]);
      $("#btn2").html(response.results[questionCounter].incorrect_answers[1]);
      $("#btn3").html(response.results[questionCounter].correct_answer);
      $("#btn4").html(response.results[questionCounter].incorrect_answers[2]);
    }

 });
});


var giphyCall = "";



$(document).on("click", ".dropdown-item.gifs", function(event){
    $(this).text();
    giphyCall = $(this).text().toLowerCase();
    console.log(giphyCall);
   
    var queryURL = "https://api.giphy.com/v1/gifs/random?q=" + giphyCall + "&api_key=cQMImmpDl6pBcNUByYr4F55aUUaMHYBU&limit=1"
    console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response){
        console.log(response);
        console.log(response.data.images.downsized.url);
        $("#chat-box").html("<img src='response.data.images.downsized.url'>");
    });

})

