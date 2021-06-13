setInterval(function() {date()}, 500);
date();

function date() {
    var d = new Date();
    if (d.getHours() <= 9) {var h = "0" + d.getHours();} else {var h = d.getHours();}
    if (d.getMinutes() <= 9) {var m = "0" + d.getMinutes();} else {var m = d.getMinutes();}
    if (d.getSeconds() <= 9) {var s = "0" + d.getSeconds();} else {var s = d.getSeconds();}
    document.getElementById("date").innerHTML = h + ":" + m + ":" + s;
}