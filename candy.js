$(document).ready(function(){
  $("#yes").on("click", function(event){
    event.preventDefault();
    setAnswer("Unaccaptable.  Completely fucking unaccaptable.", 270);
  });

  $("#no").on("click", function(event){
    event.preventDefault();
    setAnswer("Good.  That's good.", 115);
  });
});


function setAnswer(text, width){
  $("#answer-wrapper").html(text).css('width', width + 'px');
}