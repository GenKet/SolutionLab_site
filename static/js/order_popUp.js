const order_button_popUp = document.getElementById('order_button_popUp');

const name_user_popUp = document.getElementById('user_name_popUp');

const email_popUp = document.getElementById('user_email_popUp');

const phone_popUp =  document.getElementById('user_phone_popUp');

const list_item_main =  document.getElementById('title_list');

order_button_popUp.addEventListener('click', ()=>{
  const formData = new FormData();
    formData.append('name', name_user_popUp.value);
    formData.append('email', email_popUp.value);
    formData.append('phone', phone_popUp.value);
    formData.append('order', list_item_main.textContent);

    fetch("/send_to_telegram/", {
        method: "POST",
        body: formData,
    })
    .then(response => response.json())
    .catch(error => {
        console.error("Ошибка выполнения запроса", error);
    });
});