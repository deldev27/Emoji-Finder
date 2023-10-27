import { useState } from 'react'

const Pagination = ({
	emojiCardsPerPage,
	emoji,
	paginate,
	setEmojiCardsPerPage,
	currentPage,
}) => {
	const [pageNumberLimit, setPageNumberLimit] = useState(5)
	const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5)
	const [minPageNumberLimit, setMinPageNumberLimit] = useState(0)

	const pageNumbers = []

	for (let i = 1; i <= Math.ceil(emoji / emojiCardsPerPage); i++) {
		pageNumbers.push(i)
	}

	const nextPages = () => {
		if (currentPage + 1 > maxPageNumberLimit) {
			setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit)
			setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit)
		}
	}

	return (
		<footer className='footer'>
			<div className='footer__pagination'>
				<input
					type='number'
					className='pagination__input'
					placeholder='First'
					onChange={event => paginate(event.target.value)}
				/>
				{pageNumbers.map(number => {
					if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
						return (
							<a
								className={
									currentPage == number
										? 'pagination__link pagination__link_active'
										: 'pagination__link'
								}
								onClick={() => {
									nextPages()
									paginate(number)
								}}
							>
								{number}
							</a>
						)
					}
				})}
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
