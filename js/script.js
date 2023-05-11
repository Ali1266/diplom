window.addEventListener('DOMContentLoaded', ()=>{
    // tabs -----------------
    if(document.querySelector('.col-md-3')){
        const tabHeader = document.querySelector('.col-md-3'),
              tabHeaderItems = document.querySelectorAll('.tabs-menu li'),
              tabHeaderLinks = document.querySelectorAll('.tabs-menu li a'),
              tabContents = document.querySelectorAll('.tab-content');

        function displayNone(){
            tabContents.forEach(item=>{
                item.style.display = 'none';
            });
            tabHeaderItems.forEach(item=>{
                item.classList.remove('current');
            });
        }
        
        function displayBlock(i=0){
            tabContents[i].style.display = 'block';
            tabHeaderItems[i].classList.add('current');
        }

        displayNone();
        displayBlock();

        tabHeader.addEventListener('click', (event)=>{
            tabHeaderLinks.forEach((item, i)=>{
                if(event.target == item){
                    displayNone();
                    displayBlock(i);
                }
            });
        });
    }

    // slider -----------------
    if(document.querySelector('.events-carousel')){
        const slides = document.querySelectorAll('.events-carousel .swiper-slide'),
              prev = document.querySelector('.ec-button-prev'),
              next = document.querySelector('.ec-button-next');

        let slideNumber = 1;

        showSlides(slideNumber);
        function showSlides(n){
            if(n > slides.length){
                slideNumber = 1;
            }
            if(n < 1){
                slideNumber = slides.length;
            }
            slides.forEach(item => item.style.display = 'none');
            slides[slideNumber - 1].style.display = 'block';
        }

        function nextSlides(n){
            showSlides(slideNumber += n);
        }

        prev.addEventListener('click', ()=>{
            nextSlides(-1);
        });
        next.addEventListener('click', ()=>{
            nextSlides(1);
        });
    }

    // reviews-slider -----------------
    if(document.querySelector('.testimonilas-carousel')){
        const reviewsSlides = document.querySelectorAll('.testimonilas-carousel .swiper-slide'),
              reviewsPrev = document.querySelector('.tc-button-prev'),
              reviewsNext = document.querySelector('.tc-button-next');

        let reviewsSlideNumber = 1;

        reviewsShowSlides(reviewsSlideNumber);
        function reviewsShowSlides(n){
        if(n > reviewsSlides.length){
            reviewsSlideNumber = 1;
        }
        if(n < 1){
            reviewsSlideNumber = reviewsSlides.length;
        }
        reviewsSlides.forEach(item => item.style.display = 'none');
        reviewsSlides[reviewsSlideNumber - 1].style.display = 'block';
        }

        function reviewsNextSlides(n){
            reviewsShowSlides(reviewsSlideNumber += n);
        }
        reviewsPrev.addEventListener('click', ()=>{
            reviewsNextSlides(-1);
        });
        reviewsNext.addEventListener('click', ()=>{
            reviewsNextSlides(1);
        });
    }

    // tabs2 -----------------
    if(document.querySelector('.gth')){
        const tabHeader2 = document.querySelector('.gth'),
              tabHeaderItems2 = document.querySelectorAll('.gth li'),
              tabHeaderLinks2 = document.querySelectorAll('.gth li a'),
              tabContents2 = document.querySelectorAll('.tab-content');

        function displayNone2(){
            tabContents2.forEach(item=>{
                item.style.display = 'none';
            });
            tabHeaderItems2.forEach(item=>{
                item.classList.remove('current');
            });
        }

        function displayBlock2(i=0){
            tabContents2[i].style.display = 'block';
            tabHeaderItems2[i].classList.add('current');
        }

        displayNone2();
        displayBlock2();

        tabHeader2.addEventListener('click', (event)=>{
            tabHeaderLinks2.forEach((item, i)=>{
                if(event.target == item){
                    displayNone2();
                    displayBlock2(i);
                }
            });
        });
    }

    // timer -----------------
    if(document.querySelector('.days')){
        function timer(){
            let dateNow = new Date();
            let date = new Date('Jun 1 2023 02:33:10');
            let restOfTime = date - dateNow;
    
            const days = Math.floor(restOfTime / 1000 / 60 / 60 / 24),
                hours = Math.floor((restOfTime / 1000 / 60 / 60) % 24),
                minutes = Math.floor((restOfTime / 1000 / 60) % 60),
                seconds = Math.floor((restOfTime / 1000) % 60);
    
            const daysValue = document.querySelector('.days'),
                hoursValue = document.querySelector('.hours'),
                minutesValue = document.querySelector('.minutes'),
                secondsValue = document.querySelector('.seconds');
    
            daysValue.innerHTML = days;
            hoursValue.innerHTML = hours;
            minutesValue.innerHTML = minutes;
            secondsValue.innerHTML = seconds;
    
            if (restOfTime <= 0) {
                daysValue.innerHTML = '0';
                hoursValue.innerHTML = '0';
                minutesValue.innerHTML = '0';
                secondsValue.innerHTML = '0';
            }
        }
        timer();
        setInterval(timer, 1000);
    }
});