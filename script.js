const MINUTES = 1;
const SECONDS = 60;
var x = setInterval( () => {

    let timer = document.getElementById("timer");
    let time = timer.textContent.split(':');
    var minutes = Number(time[0]);
    var seconds = Number(time[1]);

    if(seconds === 0) {
        if(minutes === 0) {
            minutes = MINUTES;
        } else {
            minutes = minutes-1;
        }
        seconds = 60;
    }

    seconds = seconds - 1;
    timer.innerHTML = `${minutes.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
    })}:${seconds.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
    })}`;
}, 1000)