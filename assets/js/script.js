$(document).ready(function() {
    
    $(".devour-form").on("submit", function(event) {
      event.preventDefault();
  
      var burger_id = $(this).children(".pokeburger_id").val();
      console.log(burger_id);
      $.ajax({
        method: "PUT",
        url: "/pokeburgers/" + pokeburger_id
      }).then(function(data) {
        location.reload();
      });
  
    });
  });