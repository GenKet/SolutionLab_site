const order_btn = document.getElementById('order_button');

const name_user = document.getElementById('user_name');

const email = document.getElementById('email_user');

const phone =  document.getElementById('phone_user');

order_btn.addEventListener('click', ()=>{
    alert("cdscecerce")
    const formatData = new FormData();
    formatData.append('name', name_user.value);
    formatData.append('email', email.value);
    formatData.append('phone', phone.value);
    formatData.append('order', "None");

    fetch("/send_to_telegram/", {
        method: "POST",
        body: formatData,
    })
    .then(response => response.json())
    .catch(error => {
        console.error("Ошибка выполнения запроса", error);
    });


})
