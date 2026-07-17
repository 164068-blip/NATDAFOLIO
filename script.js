/* =====================================
   NATTHADA PORTFOLIO 2026
   MODERN JAVASCRIPT EFFECT
===================================== */



// ==========================
// PAGE LOAD
// ==========================


window.addEventListener("load",()=>{


    document.body.classList.add("loaded");


});






// ==========================
// SCROLL REVEAL
// ==========================


const items = document.querySelectorAll(
".stats div, .project-card, .profile-box"
);



function reveal(){


items.forEach(item=>{


let position =
item.getBoundingClientRect().top;


let screen =
window.innerHeight - 80;



if(position < screen){

item.classList.add("show");

}


});


}



window.addEventListener(
"scroll",
reveal
);


reveal();







// ==========================
// PROFILE 3D EFFECT
// ==========================


const profile =
document.querySelector(".profile-box");



if(profile){


profile.addEventListener(
"mousemove",
(e)=>{


let x =
(e.offsetX / profile.offsetWidth - .5) * 20;


let y =
(e.offsetY / profile.offsetHeight - .5) * 20;



profile.style.transform =

`
rotateY(${x}deg)
rotateX(${-y}deg)
`;



});




profile.addEventListener(
"mouseleave",
()=>{


profile.style.transform =
"rotateY(0deg) rotateX(0deg)";


});


}







// ==========================
// NAVBAR BLUR
// ==========================



window.addEventListener(
"scroll",
()=>{


const header =
document.querySelector("header");



if(window.scrollY > 60){


header.style.background =
"rgba(255,255,255,.08)";


header.style.backdropFilter =
"blur(20px)";


header.style.borderRadius =
"25px";


}


else{


header.style.background =
"transparent";


}


});








// ==========================
// FLOATING LIGHT EFFECT
// ==========================


function createLight(){



const light =
document.createElement("span");



light.className="floating-light";



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
900
);
