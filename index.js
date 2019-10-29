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

bot.on('inline_query', query => {
	const results = []

	for (let i = 0; i < 5; i++) {
		results.push({
			type: 'article',
			id: i.toString(),
			title: 'Title ' + i, 
			input_message_content: {
				message_text: `Article ${i+1}`
			}
		})
	}

	bot.answerInlineQuery(query.id, results, {
		cache_time: 0
	})
})
