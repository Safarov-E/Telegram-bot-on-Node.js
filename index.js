const TelegramBot = require('node-telegram-bot-api')
const debug = require('./helpers')
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

bot.on('message', msg => {
	setTimeout(() => {
		bot.sendMessage(msg.chat.id, `https://javascript.ru/`, {
			disable_web_page_preview: true,
			disable_notification: true,
		})
	}, 1000)
})
