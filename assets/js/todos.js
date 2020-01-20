//Grey out and strike through list elements by clicking; reverse by clicking again
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});


//Click on X to delete todo element
$("ul").on("click", "span", function(event){
  //fade out the parent element of <span>, namely the <li>
  $(this).parent().fadeOut(700, function(){
    //remove the li the method is called on (this) after animation
    $(this).remove();
  });
  //stop the click event from "bubbling up" and affecting parent elements
  event.stopPropagation();
})


//Create a new 2do by typing something in the input box
$("input[type='text']").keypress(function(event){
  //check if the pressed key is the Enter key
  if (event.which === 13) {
    //take the entered text from the input box
    var new2doText = $(this).val();
    //clear input
    $(this).val("");
    //create a new li with it and add to ul
    $("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + new2doText + "</li>");
  }
});


$(".fa-pencil-square-o").click(function(){
  $("input[type='text']").fadeToggle();
});
