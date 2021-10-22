$(document).ready(function () {


    let circleText = document.getElementsByClassName('benefit-up-text');
    let circleTextRevers = document.getElementsByClassName('benefit-bottom-text');

    for (let i = 0; i < circleText.length; i++) {
        new CircleType(circleText[i])
            .radius(92);
    }
    for (let i = 0; i < circleTextRevers.length; i++) {
        new CircleType(circleTextRevers[i])
            .dir(-1)
            .radius(90);
    }

    if (document.documentElement.clientWidth < 580) {
        for (let i = 0; i < circleText.length; i++) {
            new CircleType(circleText[i])
                .radius(80);
        }
        for (let i = 0; i < circleTextRevers.length; i++) {
            new CircleType(circleTextRevers[i])
                .dir(-1)
                .radius(78);
        }

    }


    let exclusiveTea = $('#exclusive-tea');
    let whiteTea = $('#white-tea');
    let blackTea = $('#black-tea');
    let greenTea = $('#green-tea');
    let ylunTea = $('#ylun-tea');




    $(exclusiveTea).slick({
        dots: true,
        slidesToShow: 1,
        speed: 700,
        infinite: false,
        initialSlide: 1,
        touchThreshold: 15,
        centerMode: true,
        variableWidth: true
    });

    $(whiteTea).slick({
        dots: true,
        slidesToShow: 1,
        speed: 700,
        infinite: false,
        initialSlide: 1,
        touchThreshold: 15,
        centerMode: true,
        variableWidth: true
    });

    $(blackTea).slick({
        dots: true,
        slidesToShow: 1,
        speed: 700,
        infinite: false,
        initialSlide: 1,
        touchThreshold: 15,
        centerMode: true,
        variableWidth: true
    });

    $(greenTea).slick({
        dots: true,
        slidesToShow: 1,
        speed: 700,
        infinite: false,
        initialSlide: 1,
        touchThreshold: 15,
        centerMode: true,
        variableWidth: true
    });

    $(ylunTea).slick({
        dots: true,
        slidesToShow: 1,
        speed: 700,
        infinite: false,
        initialSlide: 1,
        touchThreshold: 15,
        centerMode: true,
        variableWidth: true,
        waitForAnimate: true
    });


    // if (document.documentElement.clientWidth < 580) {
    //     $(exclusiveTea).slick('refresh');
    //     $(blackTea).slick('refresh');
    //     $(whiteTea).slick('refresh');
    //     $(greenTea).slick('refresh');
    //     $(ylunTea).slick('refresh');
    //     $(exclusiveTea).slick({
    //         arrows: false,
    //         dots: true,
    //         slidesToShow: 1,
    //         speed: 700,
    //         infinite: false,
    //         initialSlide: 1,
    //         touchThreshold: 15,
    //         centerMode: true,
    //         variableWidth: true
    //     });
    //     $(blackTea).slick({
    //         arrows: false,
    //         dots: true,
    //         slidesToShow: 1,
    //         speed: 700,
    //         infinite: false,
    //         initialSlide: 1,
    //         touchThreshold: 15,
    //         centerMode: true,
    //         variableWidth: true
    //     });
    //     $(whiteTea).slick({
    //         arrows: false,
    //         dots: true,
    //         slidesToShow: 1,
    //         speed: 700,
    //         infinite: false,
    //         initialSlide: 1,
    //         touchThreshold: 15,
    //         centerMode: true,
    //         variableWidth: true
    //     });
    //     $(greenTea).slick({
    //         arrows: false,
    //         dots: true,
    //         slidesToShow: 1,
    //         speed: 700,
    //         infinite: false,
    //         initialSlide: 1,
    //         touchThreshold: 15,
    //         centerMode: true,
    //         variableWidth: true
    //     });
    //     $(ylunTea).slick({
    //         arrows: false,
    //         dots: true,
    //         slidesToShow: 1,
    //         speed: 700,
    //         infinite: false,
    //         initialSlide: 1,
    //         touchThreshold: 15,
    //         centerMode: true,
    //         variableWidth: true
    //     });
    // }
    $('.all-products-menu-item').click((e) => {
        $('.products').hide();
        let currentElement = $(e.target);
        let id = currentElement.data('id');
        $('#' + id).show();

        $('.all-products-menu-item').removeClass('active');
        currentElement.addClass('active')

        $('#' + id).slick('setPosition');
    });
    $('#close, #order-popup, #close-img').click((e) => {
        if (e.target.id === 'order-popup' || e.target.id === 'close' || e.target.id === 'close-img') {
            $('#order-popup').hide();
        }
    });


    let email = $('#email-discount');

    $('#discount-btn').click(() => {
        $(email).css('border-color', '#8fbc62');
        if (!email.val()) {
            $(email).css('border-color', 'red');
            return;
        }
        $.ajax({
            type: 'post',
            url: 'mail.php',
            data: 'email=' + email.val(),
            success: () => {
                $('#discount-area').css('display', 'none');
                $('#discount-btn').css('display', 'none');
                $('#success-discount').css('display', 'block');
            },
            error: () => {
                alert('error')
                $('#loader').css('display', 'none')
            }
        })
    });

    $('.buy').click(() => {
        $('#success-order').hide();
        $('#order-popup').css('display', 'flex');
        $('#popup-container').css({'background-image': 'url("images/order/bg.png")'});
        $('#popup-container form').css('display', 'flex');
    });

    let weight = $('#form-weight');
    let name = $('#form-name');
    let phone = $('#form-phone');
    let TypeOfTea = $('#select-tea');

    let ClientDate = $('.client-date');

    $('#make-order').click(() => {
        $(ClientDate).css('border-color', '#8fbc62');
        $('.order-form-item-error').hide();


        let successOrder = true;

        for (let i = 0; i < ClientDate.length; i++) {
            if (!ClientDate[i].value) {
                $(ClientDate[i]).css('border-color', 'red');
                $(ClientDate[i]).siblings('.order-form-item-error').css('display', 'block');
                successOrder = false;
            }
        }
        if (successOrder === false) {
            return;
        }
        $.ajax({
            type: 'post',
            url: 'order-mail.php',
            data: 'weight=' + weight.val() + '&name=' + name.val() + '&phone=' + phone.val() + '&TypeOfTea=' + TypeOfTea.val(),
            success: () => {
                $('#popup-container form').hide();
                $('#popup-container').css({'background-image': 'url("images/order/success-order-bg.png")'});
                $('#success-order').css('display', 'flex');
                for (let i = 0; i < ClientDate.length; i++) {
                    $(ClientDate[i]).val('');
                }
            },
            error: () => {
                alert('error')
            }
        })
    });

    new WOW({animateClass: 'animate__animated'}).init();

    $('#menu-burger').click(() => {
        $('#menu-mobil').css('display', 'flex');
    });
    $('#menu-mobil > *').click(() => {
        $('#menu-mobil').css('display', 'none');
    });


    var rellax = new Rellax('.rellax');


});



