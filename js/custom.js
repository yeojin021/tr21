$(function () {


    $('#full_wrap').fullpage({
        fixedElements: '#header , .side_lnk , .to_top',
        paddingTop: '80px',
        anchors: ['intro', 'store', 'banner', 'solution', 'promotion', 'story'],
        css3: false,


        afterLoad: function (o, d, dr) {
            if (d !== 1) {
                $('.to_top').addClass('on')
            }

            // $('.side_lnk li').removeClass('on');
            // $('.side_lnk li').eq(d - 1).addClass('on')

            // $('.section').removeClass('on');
            // $('.section').eq(idx - 1).addClass('on');
        },
        afterLoad: function (_, idx) {
            $('.section').removeClass('on');
            $('.section').eq(idx - 1).addClass('on');
            $('.side_lnk li').removeClass('on');
            $('.side_lnk li').eq(idx - 1).addClass('on');
        },


        onLeave: function (o, d, dr) {
            // if (d == 1) {
            //     tl.restart();
            // }
            if (d == 1) {
                $('.to_top').removeClass('on')
            }

            if (d == 2 || d == 4 || d == 6 || d == 7 || d == 8) {
                $('#header').addClass('on')
            } else {
                $('#header').removeClass('on')
            }

        },


    });

    $('#header  ul>li>a').on('click', function () {
        $('#header').removeClass('on');
        $('#header').removeClass('on');
    });


    const MIS = new Swiper('.main_intro_slide', {
        loop: true,
        effect: "fade",
        speed: 1000,
        autoplay: {

        },
        navigation: {
            nextEl: ".main_intro .arrows .next",
            prevEl: ".main_intro .arrows .prev",
        },
    });

    const MSS = new Swiper('.main_store_slide', {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 0,
        loop: true,
    });

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    let counterDone = false;



})