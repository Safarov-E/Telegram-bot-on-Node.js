const TelegramBot = require('node-telegram-bot-api')
const debug = require('./helpers')
const fs = require('fs')
const TOKEN = '917940363:AAF020LhXPLehaH3Q4JoiMOyGw93oVzayIw'

console.log('Бот успешно запушен')

const bot = new TelegramBot(TOKEN, {
	polling: {
		interval: 300,
		autoStart: true,
		params: {
			timeout: 10
		}
	}})
 

bot.onText(/\/pic2/, msg => {
	bot.sendPhoto(msg.chat.id, './140777471_2.jpg', {
		caption: 'This is cat photo'
	})
})