import { useEffect, useState } from 'react'
import EmojiCard from './Components/EmojiCard'
import Pagination from './Components/Pagination'

const App = () => {
	const [emoji, setEmoji] = useState([])
	const [search, setSearch] = useState('')
	const [currentPage, setCurrentPage] = useState(1)
	const [emojiCardsPerPage, setEmojiCardsPerPage] = useState(12)

	useEffect(() => {
		fetch('https://emoji.ymatuhin.workers.dev/')
			.then(response => response.json())
			.then(data => {
				setEmoji(data.slice(0, -1700))
			})
			.catch(error => {
				console.error(error)
			})
	}, [setEmoji])

	const changeSearch = event => {
		setSearch(
			event.target.value.replace(
				/[0-9\+\-\=\~\!\@\#\$\%\^\&\*\(\)\_\"\№\;\%\:\?\{\}\<\>\[\]\;\'\,\|\\.\а-яА-ЯёЁ\/]/g,
				'',
			),
		)
	}

	const indexOfLastPage = currentPage * emojiCardsPerPage
	const indexOfFirstPage = indexOfLastPage - emojiCardsPerPage
	const currentEmojiCards = emoji.slice(indexOfFirstPage, indexOfLastPage)
	const paginate = pageNumber => setCurrentPage(pageNumber)

	return (
		<>
			<header className='header'>
				<h1 className='header__title'>Emoji Finder</h1>
				<p className='header__text'>Find emoji by keywords</p>
			</header>
			<label className='emoji-search'>
				<input
					className='emoji-search__input'
					type='text'
					placeholder='Placeholder'
					value={search}
					onChange={changeSearch}
				/>
			</label>
			<EmojiCard
				search={search}
				currentEmojiCards={currentEmojiCards}
				paginate={paginate}
			/>
			<Pagination
				emojiCardsPerPage={emojiCardsPerPage}
				emoji={emoji.length}
				paginate={paginate}
				setEmojiCardsPerPage={setEmojiCardsPerPage}
			/>
		</>
	)
}

export default App
