$(document).ready(function() {
  $('.hover-image').hover(function() {
    var imgSrc = $(this).attr('src');
    $('body').css('background-image', 'url(' + imgSrc + ')');
  }, function() {
    // Reset background image when mouse leaves
    $('body').css('background-image', 'none');
  });
});
