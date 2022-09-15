// Geography
const swiper = new Swiper('.swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    pagination: {
        el: '.swiper-pagination1',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">0' + (index + 1) + "</span>";
        },

    },
    // slidesPerView: 2,
    // spaceBetween: 70,
    loop: true,

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 26
        },
        1020: {
            slidesPerView: 2,
            spaceBetween: 70,
            loop: true,
        }
    },

});

// Swiper2 Reviews
const swiper2 = new Swiper('.swiper2', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    pagination: {
        el: '.swiper-pagination2',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">0' + (index + 1) + "</span>";
        },

    },

    // slidesPerView: 3,
    // spaceBetween: 18,
    loop: true,

    // Responsive breakpoints
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 10
        },
        1020: {
            slidesPerView: 3,
            spaceBetween: 18,
            loop: true,
        }
    },
});

// Swiper4 differences
const swiper4 = new Swiper('.swiper4', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    pagination: {
        el: '.swiper-pagination4',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">0' + (index + 1) + "</span>";
        },
    },

    slidesPerView: 1,
    spaceBetween: 1000,
    // loop: true,

});

// Swiper3 Instructors
const swiper3 = new Swiper('.swiper3', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    pagination: {
        el: '.swiper-pagination3',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">0' + (index + 1) + "</span>";
        },

    },
    // slidesPerView: 3,
    // spaceBetween: 13,
    loop: true,
    // Responsive breakpoints
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        400: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        480: {
            slidesPerView: 3,
            spaceBetween: 10
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 13
        }
    },
});


// Burger
const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;

// Клонируем меню, чтобы задать свои стили для мобильной версии
const menu = document.querySelector("#menu").cloneNode(1);

// При клике на иконку hamb вызываем ф-ию hambHandler
hamb.addEventListener("click", hambHandler);

// Выполняем действия при клике ..
function hambHandler(e) {
    e.preventDefault();
    // Переключаем стили элементов при клике
    popup.classList.toggle("open");
    hamb.classList.toggle("active");
    body.classList.toggle("noscroll");
    renderPopup();
}

// Здесь мы рендерим элементы в наш попап
function renderPopup() {
    popup.appendChild(menu);
}

// Код для закрытия меню при нажатии на ссылку
const links = Array.from(menu.children);

// Для каждого элемента меню при клике вызываем ф-ию
links.forEach((link) => {
    link.addEventListener("click", closeOnClick);
});

// Закрытие попапа при клике на меню
function closeOnClick() {
    popup.classList.remove("open");
    hamb.classList.remove("active");
    body.classList.remove("noscroll");
};

// Change color of burger
window.onscroll = function (ev) {
    if (window.scrollY == 0) {
        document.getElementById("bar").style.backgroundColor = "white";
    }
    else {
        document.getElementById("bar").style.backgroundColor = "#3f3f3f";
    }
    if (window.scrollY == 0) {
        document.getElementById("bar2").style.backgroundColor = "white";
    }
    else {
        document.getElementById("bar2").style.backgroundColor = "#3f3f3f";
    }
    if (window.scrollY == 0) {
        document.getElementById("bar3").style.backgroundColor = "white";
    }
    else {
        document.getElementById("bar3").style.backgroundColor = "#3f3f3f";
    }
};