document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.mySwiper', {
        slidesPerView: 3,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        mousewhell: true,
        keybord: true,
        breakpoints: {

            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            640: {
                slidesPerView: 3,
                spaceBetween: 40
            }
        }
    })

    var sec = 1800,
        countDiv = document.getElementById('timer'),
        secpass,
        countDown = setInterval(function () {
            'use strict';

            secpass();
        }, 1000);

    function secpass() {
        'use strict';

        var min = Math.floor(sec / 60),
            remSec = sec % 60;

        if (remSec < 10) {

            remSec = '0' + remSec;

        }
        if (min < 10) {

            min = '0' + min;

        }
        countDiv.innerHTML = min + ':' + remSec;

        if (sec > 0) {

            sec = sec - 1;

        } else {

            clearInterval(countDown);

            countDiv.innerHTML = 'countdown done';

        }
    }



});




