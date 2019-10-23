$(document).ready(function() {

  $(".butts").click(function(event) {
    $(event.target).parent().children(".linkDump").slideToggle(100);
  });

});




// $("li").click(function(event){
//   $(event.target).parent().children('p').slideToggle();
//   window.setTimeout(toggleClassFunction, 200, event);
// });
