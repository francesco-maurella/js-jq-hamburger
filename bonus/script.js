var menuOpen = $('.header-right>a'); // recuperiamo l'icona Open
var menuClose = $('.hamburger-menu>.close'); // recuperiamo l'icona Close
var menu = $('.hamburger-menu'); // recuperiamo il menu


// ---- Funzioni ADD CLASS / REMOVE CLASS, al click ----
menuOpen.click(function() {
  menu.addClass('active'); // aggingiamo una classe
});

$('.close').click(function() {
  menu.removeClass('active'); // rimuoviamo una classe
});
// ------------------------------------------------------


// ----------- Funzioni SHOW / HIDE, al click -----------
menuOpen.click(function() {
  menu.show(); // l'elemento viene mostrato
});

menuClose.click(function() {
  menu.hide(); // l'elemento viene nascosto
});
// ------------------------------------------------------


// ------- Funzioni FADE IN / FADE OUT, al click --------
menuOpen.click(function() {
  menu.fadeIn('slow'); // l'elemento appare lentamente
});

menuClose.click(function() {
  menu.fadeOut('slow'); // l'elemento svanisce lentamente
});
// ------------------------------------------------------
