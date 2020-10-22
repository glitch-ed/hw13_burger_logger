$(function() {
    $(".change-eat").on("click", function(event) {
      var id = $(this).val();
      console.log(id);
      var newDevour = $(this).data("newdevour");
  
      var newDevourState = {
        devoured: newDevour
      };
      console.log(newDevour);

     //PUT
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevourState
      }).then(
        function() {
          console.log("changed devour to", newDevour);
          
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      
      event.preventDefault();
     
      var newBurger = {
        burger_name: $("#burg").val().trim(),
        devoured: false
      };
    

      // POST
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          location.reload();
        }
      );
    });
  
    $(".delete-burger").on("click", function(event) {
      var id = $(this).data("id");
  
      // Delete
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger", id);
          location.reload();
        }
      );
    });
  });