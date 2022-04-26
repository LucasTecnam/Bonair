function scrollup(){
    var currentscroll = document.documentElement.scrollTop;
    if (currentscroll > 0){
        window.scrollTo (0, 0);
    }
}

document.getElementById("button-up").addEventListener("click", scrollup);

buttonup=document.getElementById("button-up");
window.onscroll=function(){
    var scroll=document.documentElement.scrollTop;
    if (scroll>300){
        buttonup.style.transform="scale(1)";
    }
    else if(scroll<300){
        buttonup.style.transform="scale(0)";
    }
}
function showDiv() {  
                if (document.getElementById('leg4').style.display == 'none') {
                leg4.style.display = 'contents';
                }
                else if (document.getElementById('leg5').style.display == 'none'){
                leg5.style.display = 'contents';  
                }
                else {
                leg6.style.display = 'contents';  
                }
                }

'use strict'
const li        =document.querySelectorAll('.li')
const bloque    =document.querySelectorAll('.bloque')



function showDiv() {  
if (document.getElementById('leg4').style.display == 'none') {
leg4.style.display = 'contents';
}
else if (document.getElementById('leg5').style.display == 'none'){
leg5.style.display = 'contents';  
}
else {
leg6.style.display = 'contents';  
}
}

var tilde = "Detectamos un error. </br> Por favor revise su formulario."


/*
let start = document.getElementById('start');
start.min = (new Date()).toISOString().substring(0, 19);

let start1 = document.getElementById('start1');
start1.min = (new Date()).toISOString().substr(0, 19);

let start2 = document.getElementById('start2');
start2.min = (new Date()).toISOString().substr(0, 19);