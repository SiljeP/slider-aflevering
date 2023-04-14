const INNER_SLIDER = document.querySelector(".inner__slider");
const SLIDER_IMG = document.querySelectorAll(".inner__slider img");

const PREV_BTN = document.querySelector("#prevBtn");
const NEXT_BTN = document.querySelector("#nextBtn");
const IG_LINK = document.querySelector(".follow_button");


let index = 0;
const SIZE = SLIDER_IMG[0].clientWidth;


//starter paa slide 1
INNER_SLIDER.style.transform = 'translateX(' + (-SIZE * index) + 'px';


//KNAPPERNE

function pascalorder99() {
    if (index == 4) {
        setTimeout(() => {
            IG_LINK.style.display = 'block'
        }, 750);
    } else {
        IG_LINK.style.display = 'none'
    }
}

NEXT_BTN.addEventListener("click", mover);

function mover(event) {
    index++;
    if (index >= SLIDER_IMG.length) {
        
        index = 0
        INNER_SLIDER.style.transform = 'translateX(' + (-SIZE * index) + 'px)';

    }

    pascalorder99()

    INNER_SLIDER.style.transition = "transform 1s ease";
    INNER_SLIDER.style.transform = 'translateX(' + (-SIZE * index) + 'px)';
}

PREV_BTN.addEventListener("click", moverBack);

function moverBack(event) {
    index--;
    if (index < 0) index = SLIDER_IMG.length -1;

    pascalorder99()

    INNER_SLIDER.style.transition = "transform 1s ease";
    INNER_SLIDER.style.transform = 'translateX(' + (-SIZE * index) + 'px)';
}

IG_LINK.addEventListener("click", workingLink);

function workingLink(event){
    window.open('https://www.instagram.com/pascalispunk/')
    console.log(workingLink);
}





// W O R K  I N  P R O G R E S S

// // GØR SÅ JEG KAN NAVIGERER MED MINE NAV BUTTONS
// const DOTS_NAV = document.querySelector(".slider__nav");
// const DOTS = Array.from(DOTS_NAV.children);

// const UPDATE_DOTS = (CURRENT_DOT, TARGET_DOT) => {
//     CURRENT_DOT.classList.remove("current_slide")
//     TARGET_DOT.classList.add("current_slide")
// }

// DOTS_NAV.addEventListener("click", whatButton);

// function whatButton (event) {
//     const TARGET_DOT = event.target.closest("button"); 

//     if(!TARGET_DOT) return;

//     const CURRENT_SLIDE = INNER_SLIDER.querySelector(".current_slide");
//     const CURRENT_DOT = DOTS_NAV.querySelector(".current_slide");
//     const TARGET_INDEX = DOTS.findIndex(heart => heart === TARGET_DOT);
//     const TARGET_SLIDE = slides[TARGET_INDEX] //tjek den her

//     moveToSlide(INNER_SLIDER, CURRENT_SLIDE, TARGET_SLIDE); //46 min kevin powell video
//     CURRENT_DOT.classList.remove(".current_slide");

//     TARGET_DOT.classList.add(".current_slide");
//     UPDATE_DOTS(CURRENT_DOT,TARGET_DOT);

// }










//EKSTRA TING JEG HAR KOMMENTERET UD DA JEG CHANGED HVAD JEG VILLE GOERE

//NÅR ANIMATIONEN/TRANSITION ER FÆRDIG

// INNER_SLIDER.addEventListener('transitionend', tranEnd);

// function tranEnd(event) {
//     if (SLIDER_IMG[index].id === 'lastClone') {
//         INNER_SLIDER.style.transition = "none";
//         index = SLIDER_IMG.length - 1;
//         INNER_SLIDER.style.transform = 'translateX(' + (-SIZE * index) + 'px)';
//     }
//     if (SLIDER_IMG[index].id === 'firstClone') {
//         INNER_SLIDER.style.transition = "none";
//         index = SLIDER_IMG.length - 1;
//         INNER_SLIDER.style.transform = 'translateX(' + (-SIZE * index) + 'px)';
//     }
// }

    //Fordi den ene function (tranEnd) først starter når transition SLUTTER så kan man klikke hurtigt på piletasterne og komme udenom den og det er grimt. Derfor tilføjes if(index <= 0) return;




//bruges hvis man vil add class men det goer jeg i js i stedet
    // if (SLIDER_IMG.classList.contains("animatedDiv--moved")) {
    //     SLIDER_IMG.classList.remove("animatedDiv--moved")
    // } else {
    //     SLIDER_IMG.classList.add("animatedDiv--moved")
    // }
