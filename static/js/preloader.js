"use strict";

const preloader = document.getElementById("preloader");

if (Number(window.innerWidth) > 560) {
  let body = document.getElementById("body");

  const animations = document.querySelectorAll(".preloader > div");
  let counter = 0;


  window.onload = () => {

    body.classList.toggle("body_popUp_active");

    animations.forEach((elem) => {
      elem.addEventListener("animationend", () => {
        counter++;
        if (counter == animations.length) {
          body.classList.toggle("body_popUp_active");
          preloader.remove();
        }
      });
    });
  };
}

else{
  preloader.style.display = 'none'
}
