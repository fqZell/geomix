const headerMenu = () => {
    const headerEl = document.querySelector(".header__nav__el.active");
    const headerMenuEl = document.querySelector(".header__menu");
    const headerOverlay = document.querySelector(".overlay");
    const headerMenuWrapper = document.querySelector(".header__menu__wrapper");

    headerEl.addEventListener("mouseover", () => {
        headerOverlay.classList.add("active");
        headerMenuEl.classList.add("active");
        document.body.classList.add("active-menu");
        
        headerEl.classList.add("rotate-arrow");
    });

    headerMenuWrapper.addEventListener("mouseleave", () => {
        headerOverlay.classList.remove("active");
        headerMenuEl.classList.remove("active");
        document.body.classList.remove("active-menu");
        
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

const tabs = () => {
    const tabsEl = document.querySelectorAll(".product__column__header");
    const tabContentsEl = document.querySelectorAll(".product__tab");

    tabsEl.forEach((tabEl, index) => {
        tabEl.addEventListener("click", () => {
            // Удаляем класс "active" у всех заголовков вкладок
            tabsEl.forEach((el) => {
                el.classList.remove("active");
            });
            
            // Добавляем класс "active" к текущему заголовку вкладки
            tabEl.classList.add("active");

            // Удаляем класс "active" у всех содержимых вкладок
            tabContentsEl.forEach((content) => {
                content.classList.remove("active");
            });
            
            // Добавляем класс "active" только к соответствующему содержимому вкладки
            tabContentsEl[index].classList.add("active");
        });
    });
};

const init = () => {
    headerMenu()
    sliderBanner()
    tabs()
};

document.addEventListener('DOMContentLoaded', init);