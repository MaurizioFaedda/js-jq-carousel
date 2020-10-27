$(document).ready(function() {

    // quando clicco nella freccia dx voglio rimuovere la classe active all'elemento corrente e aggiungere la classe active all'elemento successivo
    $('.arrow-right > i').click(function() {

        var imgCorrente = $('img.active');

        imgCorrente.removeClass('active');

        // aggiungo la classe active solo dopo aver verificato che ci sia un'img (quindi il valore length dev'essere almeno 1). Quando questa condizione non si verifica (-nessun elemento- quindi length pari a 0), aggiungo la classe active alla mia prima img(figlio).

        if(imgCorrente.next('img').length) {
            imgCorrente.next('img').addClass('active');
        } else {
            $('.content-box :first-child').addClass('active')
        }
    });

    // quando clicco nella freccia sx voglio rimuovere la classe active all'elemento corrente e aggiungere la classe active all'elemento successivo
    $('.arrow-left > i').click(function() {

        var imgCorrente = $('img.active');

        imgCorrente.removeClass('active');

        if(imgCorrente.prev('img').length) {
            imgCorrente.prev('img').addClass('active');
        } else {
            $('.content-box img:last-child').addClass('active')
        }
    });

})
