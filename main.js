$(document).ready(function() {

    // quando clicco nella freccia dx voglio rimuovere la classe active all'elemento corrente e aggiungere la classe active all'elemento successivo
    $('.arrow-right > i').click(function() {

        var imgCorrente = $('img.active');
        var circleCorrente = $('.circle > .fas')

        imgCorrente.removeClass('active');
        circleCorrente.removeClass('fas')

        // aggiungo la classe active solo dopo aver verificato che ci sia un'img (quindi il valore length dev'essere almeno 1). Quando questa condizione non si verifica (-nessun elemento- quindi length pari a 0), aggiungo la classe active alla mia prima img(figlio).

        if(imgCorrente.next('img').length) {
            imgCorrente.next('img').addClass('active');
        } else {
            $('.content-box :first-child').addClass('active')
        }
        if(circleCorrente.next('i').length) {
            circleCorrente.next('i').addClass('fas');
        } else {
            $('.circle :first-child').addClass('fas')
        }
    });

    // quando clicco nella freccia sx voglio rimuovere la classe active all'elemento corrente e aggiungere la classe active all'elemento successivo
    $('.arrow-left > i').click(function() {

        var imgCorrente = $('img.active');
        var circleCorrente = $('.circle > .fas')


        imgCorrente.removeClass('active');
        circleCorrente.removeClass('fas')


        if(imgCorrente.prev('img').length) {
            imgCorrente.prev('img').addClass('active');
        } else {
            $('.content-box img:last-child').addClass('active')
        }
        if(circleCorrente.prev('i').length) {
            circleCorrente.prev('i').addClass('fas');
        } else {
            $('.circle i:last-child').addClass('fas')
        }
    });


    // quando vado a premere nel circle aggiungo le classi fas e active solo nell'elemento corrente e le disattivo a tutte le altre

    $('#first-circle').click(function() {
        remove();
        add('#first-circle', '#first-img');


    })

    $('#second-circle').click(function() {
        remove();
        add('#second-circle', '#second-img');
    })

    $('#third-circle').click(function() {
        remove();
        add('#third-circle', '#third-img');
    })

})


function add(circle, img) {
    $(circle).addClass('fas')
    $(img).addClass('active')
}

function remove() {
    $('.fa-circle').removeClass('fas')
    $('img').removeClass('active')
}
