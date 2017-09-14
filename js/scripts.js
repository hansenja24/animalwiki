$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var animal = parseInt($("#animal").val());
     if (animal === 1) {
       $("#snake").show();
       $("#eagle").hide();
       $("#tiger").hide();
     } else if (animal === 2) {
       $("#eagle").show();
       $("#snake").hide();
       $("#tiger").hide();
     } else if (animal === 3) {
       $("#tiger").show();
       $("#snake").hide();
       $("#eagle").hide();
     }

    event.preventDefault();

  });

});
