// Elemento mostrato con l'aggiunta della classe active, al click
$('.fa-bars').click(function() {
  $('.hamburger-menu').addClass('active'); // aggingiamo una classe
});

// Elemento nascosto con l'eliminazione della classe active, al click
$('.close').click(function() {
  $('.hamburger-menu').removeClass('active'); // rimuoviamo una classe
});
