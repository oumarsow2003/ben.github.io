let bars = document.getElementsByClassName('bars')[0];
let nav  = document.getElementsByTagName('nav')[0];
let x = document.getElementsByClassName('x')[0];
let shopping_icon = document.querySelector('.shopping-icon');
bars.addEventListener('click',function(){
    if(x.style.opacity !="1"){
        x.style.opacity = "1";
        bars.style.opacity ="0";
        nav.style.opacity="1";
        nav.style.right="150px";
        shopping_icon.style.opacity="0";

    }else{
        x.style.opacity ="0";
        bars.style.opacity = "1";
        nav.style.opacity="0";
        nav.style.right="100px";
        shopping_icon.style.opacity="1";
    }
})