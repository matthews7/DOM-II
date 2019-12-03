// Your code goes here
const headerBg = document.querySelector("header");
headerBg.addEventListener("mousedown", () =>{
    headerBg.style.backgroundColor = "cyan"
})

const horn = document.querySelector('.intro img');
    horn.addEventListener('dblclick', () =>{
    horn.style.width = "50%";
})


// let wheel = document.querySelector('.destination');
// wheel.addEventListener('wheel', zoom);

// function zoom(event) {
//     event.preventDefault();

//     scale += event.deltaY * -0.01;

//     // Restrict scale
//     scale = Math.min(Math.max(.125, scale), 4);

//     // Apply scale transform
//     el.style.transform = `scale(${scale})`;
// }

// let scale = 1;
// const el = document.querySelector('div');
// el.onwheel = zoom;

const keyDown = document.querySelector('body');
keyDown.addEventListener('keydown', ()=>{
    keyDown.style.backgroundColor = 'red';
})

const keyUp = document.querySelector('body');
keyUp.addEventListener('keyup', ()=>{
    keyUp.style.backgroundColor = 'yellow';
})

const button = document.querySelector('.btn');
button.addEventListener('click', () => {
    alert("Ammon is Awesome! This is a scam!")
});

const noContext = document.querySelector('.content-section');

noContext.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});


const pinkOne = document.querySelector(".content-destination")

pinkOne.addEventListener('blur', () => {
    pinkOne.style.color= 'pink';    
});



// document.querySelectorAll(".btn").forEach(el => {
//     el.addEventListener("mouseenter", () => {
//       gsap.to(el, {
//        duration: 4,
//        rotateY: 360,
//        ease: "elastic(1, 0.75)"
//       })
//     })
//   })




