const Pagination = ({
	emojiCardsPerPage,
	emoji,
	paginate,
	setEmojiCardsPerPage,
}) => {
	const pageNumbers = []

	for (let i = 1; i <= Math.ceil(emoji / emojiCardsPerPage); i++) {
		pageNumbers.push(i)
	}

	const pageSelection = event => {
		paginate(event.target.value)
	}

	return (
		<footer className='footer'>
			<div className='footer__pagination'>
				<input
					type='number'
					className='pagination__input'
					placeholder='First'
					onChange={pageSelection}
				/>
				{pageNumbers.map(number => (
					<a className='pagination__link' onClick={() => paginate(number)}>
						{number}
					</a>
				))}
				<a
					className='pagination__link'
					onClick={() => paginate(pageNumbers[pageNumbers.length - 1])}
				>
					Last
				</a>
			</div>
			<div className='select__block'>
				<p className='select__block-text'>Per Page</p>
				<select
					className='select'
					onChange={event => setEmojiCardsPerPage(event.target.value)}
				>
					<option className='select__option'>12</option>
					<option className='select__option'>24</option>
					<option className='select__option'>48</option>
				</select>
			</div>
		</footer>
	)
}

export default Pagination
