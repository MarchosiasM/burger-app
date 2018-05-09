$(document).ready(function() {
    $(".change-devoured").on("click", function(event) {
        var id = $(this).data("id");
    
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
          type: "PUT",
          data: true
        }).then(
          function() {
            console.log("Made burger with id " + id + " true");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });

      $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        let name = $("bn").val().trim()
        
    
        // Send the POST request.
        $.ajax("/api/burgers", {
          type: "POST",
          data: name
        }).then(
          function() {
            console.log("created new burger, name: " + name);
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
})