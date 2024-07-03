import Link from 'next/link'

const ActualTestsHeader = () => {
	return (
		<div className='flex justify-between items-center'>
			<div className='flex flex-col gap-3'>
				<h2 className='text-white text-3xl font-bold tracking-wider hover:text-yellow-400 w-fit transition-all'>
					Актуальні тести <span className='text-yellow-400'>{'>'}</span>
				</h2>
				<p className='text-gray-300'>
					Найбільш оцінені тести від наших авторів за тиждень.
				</p>
			</div>
			<Link
				href='/tests'
				className='bg-gray-900 text-gray-300 px-5 py-4 rounded-md uppercase font-semibold text-sm hover:text-yellow-400 transition-all'
			>
				Всі тести
			</Link>
		</div>
	)
}

export default ActualTestsHeader
