document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section[id]');
    const headerLinks = document.querySelectorAll('.header-ul > li > a');

    window.addEventListener('scroll', () => {
        let scrollPosition = window.scrollY + (window.screen.height / 4);

        let activeSection = 0;
        sections.forEach((section, index) => {
            addValue = index == (sections.length - 1) ? window.screen.height / 2 : 0;
            if (scrollPosition + addValue >= section.offsetTop) activeSection = index;
        });

        headerLinks.forEach((link) => {
            if (sections[activeSection].getAttribute('id') == link.getAttribute('href').substring(1)) {
                link.classList.add('active');
            }
            else {
                link.classList.remove('active');
            }
        });
    });

    const projectCardSliders = document.querySelectorAll('.project-card_slider');

    projectCardSliders.forEach(slider => {
        const slidesWrapper = slider.querySelector('.slider_images');
        const slidesAmount = slider.querySelectorAll('.slider_images > img').length - 1;
        const prevButton = slider.querySelector('.slider_button_prev');
        const nextButton = slider.querySelector('.slider_button_next');
        const indicatorsWrapper = slider.querySelector('.slider_indicators')
        
        let currentSlide = 0;

        function createIndicators() {
            for (let index = 0; index <= slidesAmount; index++) {
                const indicator = document.createElement('li');
                indicator.classList.add('slider_indicator');
                indicatorsWrapper.appendChild(indicator);
            }
        }

        function updateIndicators() {
            const indicators = indicatorsWrapper.querySelectorAll('.slider_indicator');
            indicators.forEach((indicator, i) => {
                indicator.classList.toggle('active', i === currentSlide);
            });
        }

        function changeSlide(number) {
            currentSlide += number;
            if (currentSlide < 0) {
                currentSlide = slidesAmount;
            };
            if (currentSlide > slidesAmount) {
                currentSlide = 0;
            };

            slidesWrapper.style.transform = `translateY(${currentSlide * -100}%)`;
            updateIndicators();
        };

        prevButton.addEventListener('click', () => changeSlide(-1));
        nextButton.addEventListener('click', () => changeSlide(+1))
        createIndicators();
        updateIndicators();
    });

    const burgerMenu = document.querySelector('.burger-menu');
    const headerUl = document.querySelector('.header-ul');

    if (window.screen.width > 768) {
        headerUl.classList.add('opened');
        burgerMenu.classList.add('hidden');
        burgerMenu.classList.remove('active');
    }
    else {
        headerUl.classList.remove('opened');
        burgerMenu.classList.remove('hidden');
        burgerMenu.classList.remove('active');
    }
    
    window.addEventListener('resize', () => {
        if (window.screen.width > 768) {
            headerUl.classList.add('opened');
            burgerMenu.classList.add('hidden');
            burgerMenu.classList.remove('active');
        }
        else {
            headerUl.classList.remove('opened');
            burgerMenu.classList.remove('hidden');
            burgerMenu.classList.remove('active');
        }
    });

    burgerMenu.addEventListener('click', () => {
        headerUl.classList.toggle('opened');
        burgerMenu.classList.toggle('active');
    });
});