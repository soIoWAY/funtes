import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'
import { IoIosStats } from 'react-icons/io'

const PrevHeader = () => {
	return (
		<div className='mt-5 flex justify-between items-center text-gray-200 text-sm font-semibold'>
			<Link href='/tests' className='flex items-center gap-2 uppercase'>
				<FaArrowLeft className='text-lg' />
				<span className='hover:text-yellow-400 transition-all'>Назад</span>
			</Link>
			<button className='uppercase flex items-center gap-2'>
				<span className='hover:text-yellow-400 transition-all'>Статистика</span>
				<IoIosStats className='text-lg' />
			</button>
		</div>
	)
}

export default PrevHeader
