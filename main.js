

const hr = document.getElementById('hours');
const min = document.getElementById('minutes');
const sec = document.getElementById('seconds');


// ========= PREVENT USER FROM RIGHT CLICK ON THE PAGE ================== //
window.addEventListener('contextmenu' , (e) => {
    e.preventDefault();
});
// ============================================================ //



// ============================ PWA =========================== //
// let deferredPrompt;
// 
// window.addEventListener('beforeinstallprompt', (e) => {
    // deferredPrompt = e;
// });

// ================== NEW CODE ========================== //
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent the mini-infobar from appearing on mobile
//   e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI notify the user they can install the PWA
//   showInstallPromotion();
  // Optionally, send analytics event that PWA install promo was shown.
   console.log(`'beforeinstallprompt' event was fired.`);
});

// ============================================================ //

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
    } else if (hours === 0) {
        hr.innerHTML = `12<p class="am-pm">AM</p>`;   
    } else if (hours === 12) {
        hr.innerHTML = `12<p class="am-pm">PM</p>`;   
    } else {
        hr.innerHTML = `${hours}<p class="am-pm">AM</p>` ;   
    }


    // ================== OLD CODE ====================== //
    // if (hours > 12) {
    //     // hr.innerHTML = hours - 12;   
    //     hr.innerHTML = `${hours - 12}<p class="am-pm">PM</p>` ;   
    // } else {
    //     hr.innerHTML = `${hours}<p class="am-pm">AM</p>` ;   
    // }

    // ========================================================= //


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