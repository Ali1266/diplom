window.addEventListener('DOMContentLoaded', ()=>{
    // timer -----------------
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
});