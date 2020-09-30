const config = require('./config')
const tg_bot = require('telegraf')
const kb = require('./keyboard')


const bot = new tg_bot(config.token)
bot.on("message", ctx => {
    if (ctx.message.text == "/start"){
    bot.telegram.sendMessage(ctx.chat.id, "Greeting words", {
        reply_markup:{
            keyboard: kb.language
        } 
    })
}
    const chat = ctx.chat.id
    const lang = ctx.message.text
    if (lang == "O'zbek tili") {
        bot.telegram.sendMessage(chat, "Birini tanlang", {
            reply_markup: {
                keyboard: kb.main_uzbek
            }
        })
    } 
    else if (lang == "Русский язык"){
        bot.telegram.sendMessage(chat, "Выбери один", {
            reply_markup: {
                keyboard: kb.main_rus
            }
        })
    }
    const chat_id = ctx.chat.id
    const command = ctx.message.text
    console.log(command)
    if(command == "Buket va kompozitsiyalar"){
        bot.telegram.sendMessage(chat_id, "Buket va kompozitsiyalar", {
            reply_markup:{
                inline_keyboard: kb.buket_uzbek
            }
        })
}
else if(command == "Букеты и композиции"){
    bot.telegram.sendMessage(chat_id, "Букеты и композиции", {
        reply_markup:{
            inline_keyboard: kb.buket_rus
        }
    })
}

else if (command == "Atirgullar"){
    bot.telegram.sendMessage(chat_id, "Atirgul", {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: "Atirgullar borasida taklif",
                        callback_data: "rose_uz"
                    }
                ]
            ]
        }
})}

else if (command == "Розы"){
    bot.telegram.sendMessage(chat_id, "Роза", {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: "Atirgullar borasida taklif",
                        callback_data: "rose_uz"
                    }
                ]
            ]
        }
})}

else if (command == "Xona gullari"){
    bot.telegram.sendMessage(chat_id, "Xona gullari", {
        reply_markup:{
            inline_keyboard:kb.room_uz
        }
    })
    bot.action("decorative_uz", query => {
            bot.telegram.sendMessage(chat_id, "Qanday qabul qilasiz", {
                reply_markup:{
                    inline_keyboard:[
                        [
                            {
                                text:"Idish bilan",
                                callback_data:"Idish"

                            },
                            {
                                text:"Idishsiz",
                                callback_data:"Idishsiz"
                            }
                        ]
                    ]
                }
            })
        }
     )
     bot.action("blossom_uz", query => {
        bot.telegram.sendMessage(chat_id, "Qanday qabul qilasiz", {
            reply_markup:{
                inline_keyboard:[
                    [
                        {
                            text:"Idish bilan",
                            callback_data:"Idish"

                        },
                        {
                            text:"Idishsiz",
                            callback_data:"Idishsiz"
                        }
                    ]
                ]
            }
        })
    }
 )     
}

else if (command == "Комнатные расстение"){
    bot.telegram.sendMessage(chat_id, "Комнатные расстение", {
        reply_markup:{
            inline_keyboard:kb.room_rus
        }
    })
    bot.action("decorative_rus", query => {
            bot.telegram.sendMessage(chat_id, "Как вы хотите получить", {
                reply_markup:{
                    inline_keyboard:[
                        [
                            {
                                text:"С кашпо",
                                callback_data:"С кашпо"

                            },
                            {
                                text:"Без кашпо",
                                callback_data:"Без кашпо"
                            }
                        ]
                    ]
                }
            })
    })
    bot.action("blossom_rus", query => {
        bot.telegram.sendMessage(chat_id, "Как вы хотите получить", {
            reply_markup:{
                inline_keyboard:[
                    [
                        {
                            text:"С кашпо",
                            callback_data:"С кашпо"

                        },
                        {
                            text:"Без кашпо",
                            callback_data:"Без кашпо"
                        }
                    ]
                ]
            }
        })
})   
}

else if (command == "Bayramlarni bezatish"){
bot.telegram.sendMessage(chat_id, "Bayramlarni bezatish", {
    reply_markup:{
        inline_keyboard:kb.event_uz
    }
})
}

else if (command == "Оформление торжеств"){
bot.telegram.sendMessage(chat_id, "Bayramlarni bezatish", {
    reply_markup:{
        inline_keyboard:kb.event_rus
    }
})
}

else if (command == "Obodonlashtirish"){
    bot.telegram.sendMessage(chat_id, "Obodonlashtirish", {
        reply_markup:{
            inline_keyboard:[
                [
                    {
                        text:"Portfolio",
                        callback_data:"cleaning_uz",
                        url: "https://google.com"
                    }
                ]
            ]
        }
    })
}

else if (command == "Озеленение"){
    bot.telegram.sendMessage(chat_id, "Озеленение", {
        reply_markup:{
            inline_keyboard:[
                [
                    {
                        text:"Портфолио",
                        callback_data:"cleaning_rus",
                        url: "https://google.com"
                    }
                ]
            ]
        }
    })
}

else if (command == "Vazalar, Dekorativ idishlar, Tuvaklar"){
    bot.telegram.sendMessage(chat_id, "Vazalar, Dekorativ idishlar, Tuvaklar", {
        reply_markup:{
            inline_keyboard:kb.vase_uz
        }
    })
    bot.action("Metall", query => {
        bot.telegram.sendMessage(chat_id, `${query.match} tanlandi`, {    
            reply_markup:{
                inline_keyboard:kb.type_uz
            }
        })
    
    })
    bot.action("Sopol", query => {
        bot.telegram.sendMessage(chat_id, `${query.match} tanlandi`, {    
            reply_markup:{
                inline_keyboard:kb.type_uz
            }
        })
    
    })
    bot.action("Shisha", query => {
        bot.telegram.sendMessage(chat_id, `${query.match} tanlandi`, {    
            reply_markup:{
                inline_keyboard:kb.type_uz
            }
        })
    
    })
    bot.action("Yog'och", query => {
        bot.telegram.sendMessage(chat_id, `${query.match} tanlandi`, {    
            reply_markup:{
                inline_keyboard:kb.type_uz
            }
        })
    
    })
    bot.action("Plastik", query => {
        bot.telegram.sendMessage(chat_id, `${query.match} tanlandi`, {    
            reply_markup:{
                inline_keyboard:kb.type_uz
            }
        })
    
    })
}

else if(command == "Вазы, Кашпо, Горшки"){
    bot.telegram.sendMessage(chat_id, "Вазы, Кашпо, Горшки", {
        reply_markup:{
            inline_keyboard:kb.vase_rus
        }
    })
    bot.action("Металл", query => {
        bot.telegram.sendMessage(chat_id, `${query.match} выбран`, {
            reply_markup:{
                inline_keyboard:kb.type_rus
            }
        })
    })
    bot.action("Керамика", query => {
        bot.telegram.sendMessage(chat_id, `${query.match} выбран`, {
            reply_markup:{
                inline_keyboard:kb.type_rus
            }
        })
    
    })
    bot.action("Стекло", query => {
        bot.telegram.sendMessage(chat_id, `${query.match} выбран`, {
            reply_markup:{
                inline_keyboard:kb.type_rus
            }
        })
    
    })
    bot.action("Дерево", query => {
        bot.telegram.sendMessage(chat_id, `${query.match} выбран`, {
            reply_markup:{
                inline_keyboard:kb.type_rus
            }
        })
    })
    bot.action("Пластик", query => {
        bot.telegram.sendMessage(chat_id, `${query.match} выбран`, {
            reply_markup:{
                inline_keyboard:kb.type_rus
            }
        })
    
    })
}

else if(command == "Servis"){
    bot.telegram.sendMessage(chat_id, "Bizning xizmatlar", {
        reply_markup:{
            inline_keyboard: kb.service_uz
        }
    })
    bot.action("Konsultatsiya", query => {
        bot.telegram.sendMessage(chat_id, "Konsultatsiya", {
            reply_markup:{
                inline_keyboard:kb.consulting_uz
            }
        })}
    )
}

else if(command == "Сервис"){
    bot.telegram.sendMessage(chat_id, "Наши сервисы", {
        reply_markup:{
            inline_keyboard: kb.service_rus
        }
    })
    bot.action("Консультация", query => {
        bot.telegram.sendMessage(chat_id, "Консультация", {
            reply_markup:{
                inline_keyboard:kb.consulting_rus
            }
        })}
    )
}

else if(command == "HomeDecor"){
    bot.telegram.sendMessage(chat_id, "Home decor", {
        reply_markup:{
            inline_keyboard:kb.decor_uz
        }
    })
}

else if (command == "Home Decor"){
    bot.telegram.sendMessage(chat_id, "Home decor", {
        reply_markup:{
            inline_keyboard:kb.decor_rus
        }
    })
}

else if(command == "Katalog"){
    bot.telegram.sendDocument(chat_id, "filepath")
}

else if(command == "Каталог"){
    bot.telegram.sendDocument(chat_id, "filepath")
}
})
bot.launch()