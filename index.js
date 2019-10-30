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
 
bot.onText(/\/doc2/, msg => {
	bot.sendMessage(msg.chat.id, 'Upload start...')
	fs.readFile(__dirname + '/wfm.rar', (err, file) => {
		bot.sendDocument(msg.chat.id, file, {
			caption: 'Additional text'
		}).then(() => {
			bot.sendMessage(msg.chat.id, 'Upload finish')
		})
	})
})