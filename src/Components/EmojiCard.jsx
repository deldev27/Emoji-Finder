const EmojiCard = ({ currentEmojiCards, search, paginate }) => {
	return (
		<>
			{currentEmojiCards == 0 ? (
				<div className='error__block'>
					<div className='error__text'>
						НедоработОчка!
						<br />
						Нажмите на кнопку "Вернуться", либо выберите номер страницы вручную!
					</div>
					<button className='error__button' onClick={() => paginate(1)}>
						Вернуться
					</button>
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
