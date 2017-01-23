var endResult = [];

$(document).ready(function() {
  $("form#theList").submit(function(event) {
    event.preventDefault();
    $("#output").empty();
    var item = $("#lister").val();
    endResult.unshift(item);
    for (i=0; i < endResult.length; i++) {
      $("#output").append("<li>" + endResult[i] + "</li>");
    }
    $("#lister").val("");
  })
})
