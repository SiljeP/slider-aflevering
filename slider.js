const INNER_SLIDER = document.querySelector(".inner__slider");
const SLIDER_IMG = document.querySelectorAll(".inner__slider img");

const PREV_BTN = document.querySelector("#prevBtn");
const NEXT_BTN = document.querySelector("#nextBtn");

let index = 1;
const SIZE = SLIDER_IMG[1].clientWidth;


//starter paa slide 1 i stedet for 0
INNER_SLIDER.style.transform = 'translateX(' + (-SIZE * index) + 'px';

NEXT_BTN.addEventListener("click", mover);

function mover(event){
     if(index >= SLIDER_IMG.length -1) return;
    index++;
    INNER_SLIDER.style.transition = "transform 0.4s ease";
    INNER_SLIDER.style.transform = 'translateX(' + (-SIZE * index) + 'px)'; 
}
    
 PREV_BTN.addEventListener("click", moverBack);

function moverBack(event){
     if(index <= 0) return;
    INNER_SLIDER.style.transition = "transform 0.4s ease";
    index--;
    INNER_SLIDER.style.transform = 'translateX(' + (-SIZE * index) + 'px)';
    }
    
 INNER_SLIDER.addEventListener('transitionend', tranEnd);

  function tranEnd(event){
      if (SLIDER_IMG [index].id === 'lastClone')
      //INNER_SLIDER.style.transition = "none";
      index = SLIDER_IMG.length - index;
      INNER_SLIDER.style.transform = 'translateX(' + (-SIZE * index) + 'px)';

      if (SLIDER_IMG [index].id === 'firstClone')
      //INNER_SLIDER.style.transition = "none";
      index = SLIDER_IMG.length - index;
      INNER_SLIDER.style.transform = 'translateX(' + (-SIZE * index) + 'px)';
  }

    //Fordi den ene function (tranEnd) først starter når transition SLUTTER så kan man klikke hurtigt på piletasterne og komme udenom den og det er grimt. Derfor tilføjes if(index <= 0) return;




//bruges hvis man vil add class men det goer jeg i js i stedet
    // if (SLIDER_IMG.classList.contains("animatedDiv--moved")) {
    //     SLIDER_IMG.classList.remove("animatedDiv--moved")
    // } else {
    //     SLIDER_IMG.classList.add("animatedDiv--moved")
    // }
 