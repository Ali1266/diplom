window.addEventListener('DOMContentLoaded', ()=>{
    // tabs2 -----------------
    const tabHeader = document.querySelector('.gth'),
          tabHeaderItems = document.querySelectorAll('.gth li'),
          tabHeaderLinks = document.querySelectorAll('.gth li a'),
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
});