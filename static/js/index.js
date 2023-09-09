"use strict";

//scroll to head

let btn_scroll = document.getElementById("scroll");
btn_scroll.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

//scroll services slaider

let count_card = 4;
let counter = 1;
let prev = document.getElementById("slaider_prev");
let next = document.getElementById("slaider_next");
let slaider = document.getElementById("slaider_services");
let width_card = document.querySelector("#slaider_services>div").offsetWidth;

next.addEventListener("click", () => {
  if (counter < count_card) {
    slaider.style.transform =
      "translateX(-" +
      String((width_card + width_card * 0.14) * counter) +
      "px)";
    counter++;
  }
});

prev.addEventListener("click", () => {
  if (counter > count_card - (count_card - 1)) {
    slaider.style.transform =
      "translateX(-" +
      String((width_card + width_card * 0.15) * (counter - 2)) +
      "px)";
    counter--;
  }
});

//inputs mechanics

let inputs = document.querySelectorAll(".wrapper_input");

inputs.forEach((element) => {
  element.firstElementChild.addEventListener("focus", () => {
    element.lastElementChild.classList.add("color_hr");
  });

  element.firstElementChild.addEventListener("blur", () => {
    element.lastElementChild.classList.remove("color_hr");
  });
});

//scroll reviews slaider

let count_cards_reviews =
  document.getElementById("cards_reviews").childElementCount+1;
let counter_slide = 1;
let prev_btn = document.getElementById("slaider_prev_reviews");
let next_btn = document.getElementById("slaider_next_reviews");
let slaider_reviews = document.getElementById("cards_reviews");
let width_card_reviews =
  document.getElementById("cards_reviews").firstElementChild.offsetWidth;

next_btn.addEventListener("click", () => {
  if (counter_slide < count_cards_reviews - 1) {
    if (slaider_reviews.offsetWidth < 450) {
        slaider_reviews.style.transform =
          "translateX(-" +
          String(
            (width_card_reviews ) * counter_slide
          ) +
          "px)";
        counter_slide++;
      
    } else {
      slaider_reviews.style.transform =
        "translateX(-" + String((width_card_reviews+(width_card_reviews*0.1)) * counter_slide+1) + "px)";
      counter_slide++;
    }
  }
});

prev_btn.addEventListener("click", () => {
  if (counter_slide > count_cards_reviews - (count_cards_reviews - 1)) {
    if (slaider_reviews.offsetWidth < 500) {
      slaider_reviews.style.transform =
        "translateX(-" +
        String(
          (width_card_reviews + width_card_reviews * 0.17) * (counter_slide - 2)
        ) +
        "px)";
      counter_slide--;
    } else {
      slaider_reviews.style.transform =
        "translateX(-" +
        String(width_card_reviews * (counter_slide - 2)) +
        "px)";
      counter_slide--;
    }
  }
});

//

//order button mechanic

let win = document.getElementById("order_window");


let btn_order = document.querySelectorAll(".btn_write > .popUp_button");

btn_order.forEach((elem) => {
  elem.addEventListener("click", () => {
    document.getElementById("body").classList.add("body_popUp_active");
    win.style.display = "flex";

    setTimeout(() => {
      document.getElementById("body").classList.remove("body_popUp_active");
      win.style.display = "none";
    }, 3000);
  });
});
//

//burger_menu

let toggle = document.querySelector(".nav-toggle");
let modal_menu = document.getElementById("mobile_navigation");
let count_click = true;

let items_mobile_menu = document.querySelectorAll(
  "#mobile_navigation > .content > .list_burger_items > li"
);

items_mobile_menu.forEach((elem) => {
  elem.addEventListener("click", () => {
    toggle.classList.toggle("opened");
    close_mobile_menu();
  });
});

toggle.addEventListener("click", function (e) {
  this.classList.toggle("opened");

  if (count_click) {
    open_mobile_menu();
  } else {
    close_mobile_menu();
  }
});

let close_mobile_menu = () => {
  document.getElementById("body").classList.toggle("body_popUp");
  modal_menu.style.display = "none";
  document.querySelector(".header_site").style.zIndex = "2000";
  count_click = !count_click;
};

let open_mobile_menu = () => {
  document.getElementById("body").classList.toggle("body_popUp");
  modal_menu.style.display = "flex";
  document.querySelector(".header_site").style.zIndex = "9000";
  count_click = !count_click;
};
//

//mobile reviews slaider

//
