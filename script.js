let hr = document.querySelector('#hr');
let mn = document.querySelector('#mn');
let sec = document.querySelector('#sc');

setInterval(() => {
    //Clock
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * 6;
    let ss = day.getSeconds() * 6;

    hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sec.style.transform = `rotateZ(${ss}deg)`;

    let hour = document.getElementById('hour');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let ampm = document.getElementById('ampm');

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    
 //Digital Clock
    ampm.innerHTML = h >= 12 ? 'PM' : 'AM';
    h = h % 12 || 12;

    hour.innerHTML = h < 10 ? `0${h}` : h;
    minutes.innerHTML = m < 10 ? `0${m}` : m;
    seconds.innerHTML = s < 10 ? `0${s}` : s;
}, 1000);
