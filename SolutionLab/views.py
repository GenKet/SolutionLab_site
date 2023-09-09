from django.http import HttpResponse
from django.http import JsonResponse
from django.shortcuts import render

def homeview(request):
    return render(request, "index.html")

import telebot

def send_to_telegram(request):
    if request.method == "POST":
        print(request.POST)
        name = request.POST.get("name")
        email = request.POST.get("email")
        phone = request.POST.get("phone")
        order = request.POST.get("order")
        print(name,email,phone,order)
        bot = telebot.TeleBot("6674126902:AAGQYdSqiE0zK-03kQb5y8qqSX23FEDCmtc", parse_mode=None)
        chat_id = '-1001754087483'
        message_text = f'Новый заказ:\nИмя: {name}\nEmail: {email}\nТелефон: {phone}\nТип заказа: {order}'
        try:
            bot.send_message(chat_id, message_text)
            return JsonResponse({'success': True})
        except Exception as e:
            return JsonResponse({'success': False, 'error': str(e)})
        else:
            return JsonResponse({'success': False})