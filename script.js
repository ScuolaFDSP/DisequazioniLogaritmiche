   
//TIMER
var timerstart = false, allarm = false;
var oratimer = 0, minutitimer = 0, seconditimer = 0;

function starttimer() {
    if (timerstart == false && seconditimer != 0 && minutitimer != 0 && oratimer != 0) {
        timerstart = true;
        document.querySelector("#mediaplayer div img:nth-child(1)").src = "pause.png";
    }
    else if (timerstart == false && (seconditimer != 0 || minutitimer != 0 || oratimer != 0)) {
        timerstart = true;
        document.querySelector("#mediaplayer div img:nth-child(1)").src = "pause.png";
    }
    else {
        timerstart = false;
        document.querySelector("#mediaplayer div img:nth-child(1)").src = "play.png";
    }
}
function resettimer() {
    timerstart = false;
    allarm = false;
    oratimer = 0;
    minutitimer = 0;
    seconditimer = 0;
    centesimitimer = 0;
    document.querySelector("#mediaplayer div img:nth-child(1)").src = "play.png";
}

setInterval(function () {
    if (timerstart == true) {
        seconditimer--;

        if (seconditimer < 0) {
            minutitimer--;
            seconditimer = 59;
        }
        if (minutitimer < 0) {
            oratimer--;
            minutitimer = 59;
        }
    }

    if (seconditimer == 0 && minutitimer == 0 && oratimer == 0) {
        document.querySelector("#mediaplayer div img:nth-child(1)").src = "play.png";
        if (timerstart == true) {
            allarm = true;
        }
        timerstart = false;


    }
}, 1000)

function impostatimer(hours, minutes, seconds) {
    timerstart = false
    oratimer = hours;
    minutitimer = minutes;
    seconditimer = seconds;
}

setInterval(function () {
    var timer1 = document.querySelector(".timer:nth-child(1)");
    var timer2 = document.querySelector(".timer:nth-child(2)");
    var timer3 = document.querySelector(".timer:nth-child(3)");
    var timer4 = document.querySelector(".timer:nth-child(4)");
    var timer5 = document.querySelector(".timer:nth-child(5)");
    var timer6 = document.querySelector(".timer:nth-child(6)");
    timer1.innerHTML = oratimer > 9 ? oratimer.toString()[0] : "0";
    timer2.innerHTML = oratimer < 10 ? oratimer.toString()[0] : oratimer.toString()[1];
    timer3.innerHTML = minutitimer > 9 ? minutitimer.toString()[0] : "0";
    timer4.innerHTML = minutitimer < 10 ? minutitimer.toString()[0] : minutitimer.toString()[1];
    timer5.innerHTML = seconditimer > 9 ? seconditimer.toString()[0] : "0";
    timer6.innerHTML = seconditimer < 10 ? seconditimer.toString()[0] : seconditimer.toString()[1];
}, 10)


setInterval(function () {
    var body = document.querySelector("body");
    if (allarm == true) {
        body.style.backgroundColor = "red";
        setTimeout(function () {
            body.style.backgroundColor = "#C2DFE3";

        }, 500)
    }
    else {
        body.style.backgroundColor = "#C2DFE3";
    }

}, 1000)

function myOnClick(id1, id2){
    document.getElementById(id1).style.display='none';
    document.getElementById(id2).style.display='block';
    }
function stoptimer(){
    timerstart = false;
    allarm = false;
    oratimer = 0;
    minutitimer = 0;
    seconditimer = 0;
    centesimitimer = 0;
}