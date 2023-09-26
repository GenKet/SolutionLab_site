let toggle = document.querySelector(".nav-toggle");
let modal_menu = document.getElementById("mobile_navigation");
let count_click = true;

let items_mobile_menu = document.querySelectorAll(
  "#mobile_navigation > .content > .list_burger_items > li"
);

items_mobile_menu.forEach((elem) => {
  elem.addEventListener("click", () => {
    console.log('work!')
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