/* ==================================
   NATTHADA PORTFOLIO
   PREMIUM ANIMATION SCRIPT
================================== */



// เปิดหน้าเว็บ Animation

window.addEventListener("load",()=>{


    document.body.classList.add("loaded");


});





// Navbar Scroll Effect


window.addEventListener("scroll",()=>{


    const nav = document.querySelector("nav");


    if(window.scrollY > 50){

        nav.style.background =
        "rgba(255,255,255,0.12)";

        nav.style.backdropFilter =
        "blur(20px)";

        nav.style.borderRadius =
        "20px";

    }

    else{


        nav.style.background="transparent";


    }


});






// Profile Card Floating Effect


const card =
document.querySelector(".profile-card");



document.addEventListener(
"mousemove",
(e)=>{


let x =
(e.clientX / window.innerWidth -0.5)*20;


let y =
(e.clientY / window.innerHeight -0.5)*20;



card.style.transform =
`
rotateY(${x}deg)
rotateX(${-y}deg)
`;



});







// Smooth Scroll


document.querySelectorAll("nav li")
.forEach(item=>{


item.addEventListener(
"click",
()=>{


window.scrollTo({

top:window.innerHeight,

behavior:"smooth"

});


});


});







// Create Floating Bubble


function createBubble(){


const bubble =
document.createElement("div");


bubble.className="bubble";


bubble.style.left =
Math.random()*100+"%";


bubble.style.animationDuration =
(5+Math.random()*5)+"s";


document.body.appendChild(bubble);



setTimeout(()=>{


bubble.remove();


},10000);



}



setInterval(createBubble,800);
