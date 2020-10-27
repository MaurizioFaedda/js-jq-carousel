$(document).ready(function() {

    // quando clicco nella freccia dx voglio rimuovere la classe active all'elemento corrente e aggiungere la classe active all'elemento successivo
    $('.arrow-right > i').click(function() {

        var imgCorrente = $('img.active');

        imgCorrente.removeClass('active');

        imgCorrente.next('img').addClass('active');
    });

    // quando clicco nella freccia dx voglio rimuovere la classe active all'elemento corrente e aggiungere la classe active all'elemento successivo
    $('.arrow-left > i').click(function() {

        var imgCorrente = $('img.active');

        imgCorrente.removeClass('active');

        imgCorrente.prev('img').addClass('active');
    });

})
