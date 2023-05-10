

const hr = document.getElementById('hours');
const min = document.getElementById('minutes');
const sec = document.getElementById('seconds');



function watch() {
    // ========== //
    let date = new Date();
    
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    // hr.innerHTML = hours;
    min.innerHTML = minutes;
    sec.innerHTML = seconds;

    // console.log(typeof seconds);

    if (hours > 12) {
        // hr.innerHTML = hours - 12;   
        hr.innerHTML = `${hours - 12}<p class="am-pm">PM</p>` ;   
    } else {
        hr.innerHTML = `${hours}<p class="am-pm">AM</p>` ;   
    }

    if (seconds === 0) {
        min.classList.add('shake');
        setTimeout(() => {
            min.classList.remove('shake');
        }, 2000);
    };
    
    if (minutes === 0) {
        hr.classList.add('shake');
        setTimeout(() => {
            hr.classList.remove('shake');
        }, 2000);
    };

};
// == REALLY IF IT WORKS, DON'T TOUCH IT!! == //
watch();
setInterval(watch, 1000);