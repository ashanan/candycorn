$(document).ready(function(){
  $("#yes").on("click", function(event){
    event.preventDefault();
    $("#answer-wrapper").html("You're a fucking psychopath");
  });

  $("#no").on("click", function(event){
    event.preventDefault();
    $("#answer-wrapper").html("Good.  That's good.");
  });
});
