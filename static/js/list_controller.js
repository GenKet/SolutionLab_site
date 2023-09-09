"use strict";

let arrow = document.getElementById("conrol_list_elem");

let direction = 0;

arrow.addEventListener("click", () => {
   
  if (direction == 0) {
    arrow.classList.add('rotate_1')
    direction = 1;

    document.getElementById('items_list').style.top = '0px';
  }
  else {
    arrow.classList.remove('rotate_1')
    direction = 0;
    document.getElementById('items_list').style.top = '-148px'
  }
});


let title_list =  document.getElementById('title_list');


let items = document.querySelectorAll('.wrapper_list_items > div');

items.forEach(elem=>{

elem.addEventListener('click',()=>{
    let text = title_list.innerText;

    title_list.innerText = elem.innerText;

    elem.innerText = text;
})
})