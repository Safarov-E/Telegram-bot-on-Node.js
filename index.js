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
 
bot.onText(/\/audio2/, msg => {
	bot.sendMessage(msg.chat.id, 'Start audio uploading...')

	fs.readFile(__dirname + '/Thousand Foot Krutch_-_War of Change.mp3', (err, data) => {
		bot.sendAudio(msg.chat.id, data).then(() => {
			bot.sendMessage(msg.chat.id, 'Uploading finish')
		})
	})
})