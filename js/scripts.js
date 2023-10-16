const isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

if (isMobile.any()) {
    document.body.classList.add('_touch');
}   else {
    document.body.classList.add('_pc');
}

// ----------------------swiper-----------------------------

new Swiper ('.block-three__slider', {
    
    loop: true,

    speed: 800,

    
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
        },
        991.98: {
            slidesPerView: 3,
        }
    },

   
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

    spaceBetween: 30,

    slidesPerGroup: 1,
});


// ---------------------------------------------------------

const btnStyle = document.querySelector('.block-one__btnstyle')

btnStyle.addEventListener('click', function(e) {
    document.body.classList.toggle('_color')
})