import { FaRegTrashAlt, FaSearch } from 'react-icons/fa'

const TestsFilter = () => {
	const liStyle =
		'bg-gray-900 py-3 w-full sm:w-32 text-center uppercase text-white text-sm font-semibold hover:shadow-custom-border rounded-md sm:rounded-none'
	return (
		<div className='flex flex-col gap-3 sm:gap-0 sm:flex-row justify-between items-center py-5 w-full'>
			<ul className='flex gap-[2px] flex-wrap'>
				<li className={`sm:rounded-l-md ${liStyle}`}>Цікаві</li>
				<li className={liStyle}>Нові</li>
				<li className={liStyle}>Найкращі</li>
				<li className={`sm:rounded-r-md ${liStyle}`}>Недооцінені</li>
			</ul>
			<div className='flex gap-2'>
				<input
					type='text'
					className='outline-none bg-gray-900 rounded-md text-center placeholder:text-gray-300 placeholder:text-sm tracking-wide py-3 text-white uppercase text-sm font-semibold'
					placeholder='ЗІ СЛОВАМИ'
				/>
				<button className='bg-gray-900 py-3 px-3 rounded-md hover:shadow-custom-border transition-all'>
					<FaSearch className='fill-emerald-500 text-xl' />
				</button>
				<button className='bg-gray-900 py-3 px-3 rounded-md hover:shadow-custom-border transition-all'>
					<FaRegTrashAlt className='fill-red-500 text-xl' />
				</button>
			</div>
		</div>
	)
}

export default TestsFilter
