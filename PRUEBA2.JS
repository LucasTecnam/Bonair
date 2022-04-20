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