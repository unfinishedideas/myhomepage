$(document).ready(function() {

  $(".butts").click(function(event) {
    $(event.target).parent().children(".linkDump").slideToggle(100);
  });

});
