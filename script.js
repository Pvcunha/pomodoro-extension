const MINUTES = 25;
const SECONDS = 60;
var x = setInterval( () => {

    let timer = document.getElementById("timer");
    let time = timer.textContent.split(':');
    var minutes = Number(time[0]);
    var seconds = Number(time[1]);

    if(seconds === 0) {
        seconds = 60;
        minutes = minutes - 1;
    }

    seconds = seconds - 1;
    timer.innerHTML = `${minutes}:${seconds}`;
}, 1000)