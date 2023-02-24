$(document).ready(function(){
    $("button").click(function(){
      $("#keyInfo").slideToggle("slow");
     
    });
  
   

  $("button#insights").click(function(){
    $("#keyInfo2").slideToggle("slow");
   
  });


  $("button#insights2").click(function(){
    $("#keyInfo3").slideToggle("slow");
   
  });

  $("button#insights3").click(function(){
    $("#keyInfo4").slideToggle("slow");
   
  });

  $("button#insights4").click(function(){
    $("#keyInfo4").slideToggle("slow"); 
   
  });

});   


// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
   
  