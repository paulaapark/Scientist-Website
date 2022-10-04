
var element = document.getElementsByClassName("container");

var elementa = document.getElementsByClassName("event-name");

var elementb = document.getElementsByClassName("event-info");

var elementc = document.getElementById("register");




function style_me(){
    element.classList.toggle("style0");
    elementa.classList.toggle("style1");
    elementb.classList.toggle("style2");
    elementc.classList.toggle("style3");
}



function add_scientist() {
    document.getElementsByClassName('text-input').value = document.getElementById('textarea').value;
}