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
	const html = `
		<strong>Hello, ${msg.from.first_name}</strong>
		<pre>
			${debug(msg)}
		</pre>
	`
	bot.sendMessage(msg.chat.id, html, {
		parse_mode: 'HTML'
	})
})
