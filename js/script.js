
// Aggiungiamo una classe, al click
$('.fa-bars').click(function() {
  $('.hamburger-menu').addClass('active');
});

// Eliminiamo una classe, al click
$('.close').click(function() {
  $('.hamburger-menu').removeClass('active');
});
