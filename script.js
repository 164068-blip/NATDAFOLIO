/* ====================================
   NATTHADA PORTFOLIO 2026
   PREMIUM JAVASCRIPT EFFECT
==================================== */



// ================================
// PAGE LOAD EFFECT
// ================================


window.addEventListener("load",()=>{


document.body.classList.add("show");


});







// ================================
// NAVBAR GLASS EFFECT
// ================================


window.addEventListener("scroll",()=>{


const header =
document.querySelector("header");



if(window.scrollY > 50){


header.style.background =
"rgba(255,255,255,0.12)";


header.style.backdropFilter =
"blur(20px)";


header.style.borderRadius =
"25px";


header.style.padding =
"15px 30px";


}


else{


header.style.background =
"transparent";


header.style.backdropFilter =
"none";


}



});








// ================================
// PROFILE 3D MOUSE EFFECT
// ================================


const profile =
document.querySelector(".profile-card");



if(profile){


document.addEventListener(
"mousemove",
(e)=>{


let x =
(e.clientX / window.innerWidth -0.5)*20;


let y =
(e.clientY / window.innerHeight -0.5)*20;



profile.style.transform =

`
rotateY(${x}deg)
rotateX(${-y}deg)
`;



});


}







// ================================
// SCROLL REVEAL
// ================================


const reveal =
document.querySelectorAll(
".card, .menu-card div, .project-card"
);



function showReveal(){


reveal.forEach(item=>{


let top =
item.getBoundingClientRect().top;


let screen =
window.innerHeight -100;



if(top < screen){


item.classList.add("active");


}



});


}



window.addEventListener(
"scroll",
showReveal
);



showReveal();








// ================================
// IMAGE CLICK ZOOM
// ================================


const images =
document.querySelectorAll(
"img"
);



images.forEach(img=>{


img.addEventListener(
"click",
()=>{


img.classList.toggle(
"zoom"
);


});


});







// ================================
// FLOATING LIGHT
// ================================


function createLight(){


const light =
document.createElement("div");


light.className="light";



light.style.left =
Math.random()*100+"%";



light.style.animationDuration =
(5+Math.random()*5)+"s";



document.body.appendChild(light);



setTimeout(()=>{


light.remove();


},10000);



}



setInterval(
createLight,
800
);
