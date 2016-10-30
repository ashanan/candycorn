$(document).ready(function(){
  $("#yes").on("click", function(event){
    event.preventDefault();
    $("#answer-wrapper").html("Unaccaptable.  Completely fucking unaccaptable.").css('width', '270px');
  });

  $("#no").on("click", function(event){
    event.preventDefault();
    $("#answer-wrapper").html("Good.  That's good.").css('width', '115px');
  });
});
