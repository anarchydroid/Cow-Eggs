const payUtl =
document.getElementById("payBox");
const btn =
document.getElementById("playBtn");
const span =
document.getElementsByClassName("close")
[0];

btn.onclick = function() {
    payUtl.style.display = "block";
}
span.onclick = function() {
    payUtl.style.display = "none";
}
