// ================================
// NATTHADA PORTFOLIO SCRIPT
// Ocean Animation
// ================================



// Scroll Reveal Animation

const sections = document.querySelectorAll("section");


const reveal = () => {


    sections.forEach(section => {


        const top = section.getBoundingClientRect().top;


        const windowHeight = window.innerHeight;



        if(top < windowHeight - 100){


            section.style.opacity = "1";

            section.style.transform = "translateY(0)";


        }


    });


};



window.addEventListener(
"scroll",
reveal
);





// ตั้งค่าเริ่มต้น Animation


sections.forEach(section=>{


    section.style.opacity="0";


    section.style.transform="translateY(60px)";


    section.style.transition=
    "all 1s ease";


});



reveal();






// Navbar เปลี่ยนเมื่อ Scroll


const header =
document.querySelector("header");



window.addEventListener(
"scroll",
()=>{


    if(window.scrollY > 50){


        header.style.background =
        "rgba(255,255,255,0.12)";


        header.style.backdropFilter =
        "blur(15px)";


        header.style.borderRadius =
        "20px";


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







// Mouse Glow Effect


const light =
document.querySelector(".light");



document.addEventListener(
"mousemove",
(e)=>{


    light.style.left =
    e.clientX - 250 + "px";


    light.style.top =
    e.clientY - 250 + "px";



});






// Image Hover 3D Effect


const profile =
document.querySelector(".profile-box");



profile.addEventListener(
"mousemove",
(e)=>{


let x =
(e.offsetX -
profile.offsetWidth/2)
/20;


let y =
(e.offsetY -
profile.offsetHeight/2)
/20;



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







// Portfolio Card Animation


const cards =
document.querySelectorAll(".project");



cards.forEach(card=>{


card.addEventListener(
"mouseenter",
()=>{


card.style.transform =
"translateY(-15px) scale(1.03)";


});



card.addEventListener(
"mouseleave",
()=>{


card.style.transform =
"translateY(0) scale(1)";


});


});
