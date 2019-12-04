// Your code goes here
const headerBg = document.querySelector("header");
headerBg.addEventListener("mousedown", () =>{
    headerBg.style.backgroundColor = "cyan"
})

const horn = document.querySelector('.intro img');
    horn.addEventListener('dblclick', (e) =>{
    horn.style.width = "50%";
    e.stopPropagation()
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

const copy = document.querySelector('.intro h2')
copy.addEventListener('copy', (event) => {
    const selection = document.getSelection();
    event.clipboardData.setData('text/plain', selection.toString().toUpperCase());
    event.preventDefault();
});

function logSelection(event) {
    const log = document.getElementById('log');
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    log.textContent = `You selected: ${selection}`;

}
const input = document.querySelector('input');
input.addEventListener('select', logSelection);


let dashBorder = document.querySelector(".content-destination img")
dashBorder.addEventListener('mouseenter', ()=>{
    dashBorder.style.border = "15px dotted cyan"
})

let dashBOne = document.querySelector(".destination")
dashBOne.addEventListener('mouseout', ()=>{
    dashBOne.style.border = "15px dotted green"
})

// stop Propagation
const hornOne = document.querySelector('.intro');
    hornOne.addEventListener('dblclick', (e) =>{
    hornOne.style.border = "15px dotted cyan";
    e.stopPropagation()
})

const hornTwo = document.querySelector('body');
    hornTwo.addEventListener('dblclick', () =>{
    hornTwo.style.border = "15px dotted cyan";
    e.stopPropagation()
})

//Prevent Default

const stopLink = document.querySelectorAll(".nav-link");

stopLink.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
    })
})


// document.querySelectorAll(".btn").forEach(el => {
//     el.addEventListener("mouseenter", () => {
//       gsap.to(el, {
//        duration: 4,
//        rotateY: 360,
//        ease: "elastic(1, 0.75)"
//       })
//     })
//   })




