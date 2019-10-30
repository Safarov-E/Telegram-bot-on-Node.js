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

bot.onText(/\/s2/, msg => {
	fs.readFile(__dirname + '/принглс.webp', (err, sticker) => {
		bot.sendSticker(msg.chat.id, sticker)
	})
})