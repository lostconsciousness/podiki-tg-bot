import TelegramBot from 'node-telegram-bot-api';

const TOKEN = "6075679825:AAGrgD6b9hybk9EoNue44k1ZPW8paFJCs5M";

const WebAppUrl = 'https://unrivaled-malabi-c38a3f.netlify.app/';


const bot = new TelegramBot(TOKEN, {polling: true});

bot.on('message', async (msg)=>{
    console.log(msg.text);
    if(msg.text == '/start' || msg.text =='Повернутися на минулий крок.'){
        await bot.sendMessage(msg.chat.id, 'Вас вітає бот з продажу електронних сигарет! Чи є вам 18 років? ',{
            reply_markup:{
                keyboard:[
                    
                    [
                        {text:'Так, мені є 18 років.'},
                        {text:'Ні, мені ще немає 18 років.'}
                    ]
                ],
                resize_keyboard: true,
                one_time_keyboard: true
            }
        })
        
    }
    else if(msg.text == 'Так, мені є 18 років.'){
        await bot.sendMessage(msg.chat.id, "Надішліть, будь ласка, свій номер телефону:", {
            reply_markup:{
                keyboard:[
                    [{text: 'Поділитися номером телефону.',request_contact:true}]
                ],
                resize_keyboard: true,
                one_time_keyboard: true
            }
            })
    }
    else if(msg.text == 'Ні, мені ще немає 18 років.'){
        await bot.sendMessage(msg.chat.id, "Продаж нашої продукції дозволений лише людям що досягли повноліття.", {
            reply_markup:{
                keyboard:[
                    [
                        {text:'Повернутися на минулий крок.'}
                    ]
                ],
                resize_keyboard: true,
                one_time_keyboard: true
            }
        })
    }
    else if(msg.contact){
                    await bot.sendMessage(msg.chat.id,"Натисніть кнопку 'Перейти до магазину' та відкриється наш інтернет-магазин.",{
                reply_markup:{
                    inline_keyboard:[
                        [
                            {text:'Перейти до магазину', web_app: {url: WebAppUrl}}
                        ]
                    ]
                }
            })
    }
})