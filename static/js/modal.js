// 'use strict';

let body = document.getElementById('body');

let btn =  document.getElementById('write_btn');

let popUp = document.getElementById('modal');

let close_btn = document.getElementById('close_btn')

btn.addEventListener('click', ()=>{
    body.classList.add('body_popUp_active');
    document.getElementById('header').style.zIndex = '0';
    popUp.style.display = "flex";
})

close_btn.addEventListener('click',()=>{
    body.classList.remove('body_popUp_active');
    document.getElementById('header').style.zIndex = '2000';
    popUp.style.display = 'none';
})
