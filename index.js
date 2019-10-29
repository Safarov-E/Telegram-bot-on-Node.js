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

const inline_keyboard = [
	[
		{
			text: 'Forward',
			callback_data: 'forward'
		},
		{
			text: 'Reply',
			callback_data: 'reply'
		}
	],
	[
		{
			text: 'Edit',
			callback_data: 'edit'
		},
		{
			text: 'Delete',
			callback_data: 'delete'
		}
	]
]

bot.on('callback_query', query => {
	const { chat, message_id, text } = query.message

	switch (query.data) {
		case 'forward':
			bot.forwardMessage(chat.id, chat.id, message_id)
			break
		case 'reply':
			bot.sendMessage(chat.id, `Отвечаем на сообщение`, {
				reply_to_message_id: message_id
			})
			break
	}
	bot.answerCallbackQuery({
		callback_query_id: query.id
	})
})

bot.onText(/\/start/, (msg, [source, match]) => {
	const chatId = msg.chat.id

	bot.sendMessage(chatId, 'Keyboard', {
		reply_markup: {
			inline_keyboard
		}
	})
})