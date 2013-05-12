var popup = null;
var currentMessage = null;
var menu = null;
var timeout = null;
function clearPopup() {
popup.style.bottom = "-40px";
}
function popupMessage(message){
if (popup.style.bottom == "-2px") {
popup.style.bottom = "-40px";
currentMessage = message;
window.setTimeout(reMessage, 500);
window.clearTimeout(timeout);
} else {
console.log(message);
popup.innerHTML = message;
popup.style.bottom = "-2px";
timeout = window.setTimeout(clearPopup, 5000);
}
}
function reMessage(){
popupMessage(currentMessage);
}

window.onload = function(){
menu = document.getElementById('menu');
menu.addEventListener("mousedown", function(e) {
  popupMessage("test click");
}, false);
popup = document.getElementById('popup');
popup.style.bottom = "-40px";
var params = {
quality: "high",
bgcolor: "#000000",
play: "true",
loop: "true",
wmode: "transparent",
scale: "showall",
menu: "true",
devicefont: "false",
salign: "",
allowFullScreen: "true",
allowFullScreenInteractive: "true",
allowScriptAccess: "always"
};
var attributes = {
align: "middle"
};
swfobject.embedSWF("http://r.playerio.com/r/everybody-edits-su9rn58o40itdbnw69plyw/freegame.swf", "flash", "850", "500", "9.0.0", false, false, params, attributes, swfLoaded);
if (!navigator.onLine) {
  popupMessage("No internet connection found");
}
window.addEventListener("offline", function(e) {
  popupMessage("Internet disconnected");
}, false);

window.addEventListener("online", function(e) {
  popupMessage("Internet connected");
}, false);
}
function swfLoaded() {
popupMessage("EE started!");
}
