/* =====================================
   NATTHADA PORTFOLIO
   SKY BLUE EFFECT SCRIPT
===================================== */



// =========================
// SCROLL REVEAL
// =========================


const items = document.querySelectorAll(
".card, .hero-box, .profile"
);



function showOnScroll(){


items.forEach(item=>{


let position =
item.getBoundingClientRect().top;


let screen =
window.innerHeight - 120;



if(position < screen){


item.classList.add("show");


}



});


}



window.addEventListener(
"scroll",
showOnScroll
);


showOnScroll();







// =========================
// MOUSE LIGHT EFFECT
// =========================


const glow =
document.querySelector(".glow2");



document.addEventListener(
"mousemove",
(e)=>{


glow.style.left =
e.clientX - 150 + "px";


glow.style.top =
e.clientY - 150 + "px";



});







// =========================
// 3D CARD EFFECT
// =========================


const cards =
document.querySelectorAll(".card");



cards.forEach(card=>{


card.addEventListener(
"mousemove",
(e)=>{


let x =
(e.offsetX -
card.offsetWidth/2)
/20;


let y =
(e.offsetY -
card.offsetHeight/2)
/20;



card.style.transform =

`
perspective(700px)
rotateX(${-y}deg)
rotateY(${x}deg)
translateY(-10px)
`;



});





card.addEventListener(
"mouseleave",
()=>{


card.style.transform =
"translateY(0)";


});


});








// =========================
// NAVBAR GLASS EFFECT
// =========================


const header =
document.querySelector("header");



window.addEventListener(
"scroll",
()=>{


if(window.scrollY > 50){


header.style.background =
"rgba(255,255,255,.55)";


header.style.backdropFilter =
"blur(20px)";


header.style.borderRadius =
"25px";


header.style.boxShadow =
"0 0 25px rgba(0,180,255,.3)";


}


else{


header.style.background =
"transparent";


header.style.boxShadow =
"none";


}


});






// =========================
// PROFILE FLOAT
// =========================


const profile =
document.querySelector(".profile");



let move = 0;



setInterval(()=>{


move += 0.02;


profile.style.transform =

`
translateY(${Math.sin(move)*8}px)
`;



},30);
