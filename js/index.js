window.addEventListener('DOMContentLoaded', ()=>{
    // tabs -----------------
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

    // slider -----------------
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

    // reviews-slider -----------------
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
});