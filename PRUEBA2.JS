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

/*li.forEach( (cadaLi,i)=>{
    li[i].addEventListener('click', ()=>{
        li.forEach( (cadaLi, i)=>{
            li[i].classList.remove('activo')
            bloque[i].classList.remove('activo')    
            })
            li[i].classList.add('activo')
            bloque[i].classList.add('activo')
        })
    })*/

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
    