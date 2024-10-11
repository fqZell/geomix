const headerMenu = () => {
    const headerEl = document.querySelector(".header__nav__el.active");
    const headerMenuEl = document.querySelector(".header__menu");
    const headerOverlay = document.querySelector(".overlay");
    const headerMenuWrapper = document.querySelector(".header__menu__wrapper");

    // Показ меню при наведении на элемент меню
    headerEl.addEventListener("mouseover", () => {
        headerOverlay.classList.add("active");
        headerMenuEl.classList.add("active");
        document.body.classList.add("active-menu");
        
        // Добавляем класс для поворота стрелки
        headerEl.classList.add("rotate-arrow");
    });

    // Закрытие меню при уходе курсора с wrapper'а
    headerMenuWrapper.addEventListener("mouseleave", () => {
        headerOverlay.classList.remove("active");
        headerMenuEl.classList.remove("active");
        document.body.classList.remove("active-menu");
        
        // Убираем класс при выходе курсора
        headerEl.classList.remove("rotate-arrow");
    });
};

const sliderBanner = () => {
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,  
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
};

const init = () => {
    headerMenu()
    sliderBanner()
};

document.addEventListener('DOMContentLoaded', init);