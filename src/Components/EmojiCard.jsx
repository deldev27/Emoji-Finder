const EmojiCard = ({ currentEmojiCards, search }) => {
	return (
		<>
			{currentEmojiCards == 0 ? (
				<div className='emoji__error'>
					Ошибка! <br />
					Нажмите на кнопку с номером страницы, введите номер страницы или
					введите 1 из ключевых слов!
				</div>
			) : (
				<main className='emoji__block'>
					{currentEmojiCards
						.filter(res => {
							return search
								.split(' ')
								.every(searchEmoji =>
									res.keywords
										.toLowerCase()
										.includes(searchEmoji.toLowerCase()),
								)
						})
						.map(item => {
							return (
								<div className='emoji__card'>
									<div className='emoji__symbol'>{item.symbol}</div>
									<div className='emoji__title'>{item.title}</div>
									<div className='emoji__keywords'>
										{Array.from(new Set(item.keywords.split(' '))).join(' ')}
									</div>
								</div>
							)
						})}
				</main>
			)}
		</>
	)
}

export default EmojiCard
