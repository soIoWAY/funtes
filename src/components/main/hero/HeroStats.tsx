import { FaRegStar } from 'react-icons/fa'
import { MdPeopleOutline } from 'react-icons/md'
import { TiUserAddOutline } from 'react-icons/ti'

const HeroStats = () => {
	const numberStyles = 'font-semibold sm:font-bold text-sm sm:text-3xl'
	const descriptionStyles = 'hidden sm:block text-sm text-gray-300'
	return (
		<div className='bg-gray-900 w-16 sm:w-4/12 rounded-md flex flex-col sm:flex-row justify-between items-center px-6 py-4 h-60 text-white'>
			<div className='flex flex-col items-center gap-2'>
				<FaRegStar className='fill-red-500 text-2xl sm:text-6xl' />
				<span className={numberStyles}>163</span>
				<p className={descriptionStyles}>Тестів і квізів</p>
			</div>
			<div className='flex flex-col items-center gap-2'>
				<MdPeopleOutline className='fill-emerald-500 text-2xl sm:text-6xl' />
				<span className={numberStyles}>7353</span>
				<p className={descriptionStyles}>Членів спільноти</p>
			</div>
			<div className='flex flex-col items-center gap-2'>
				<TiUserAddOutline className='fill-purple-600 text-2xl sm:text-6xl' />
				<span className={numberStyles}>3944</span>
				<p className={descriptionStyles}>Користувачів вчора</p>
			</div>
		</div>
	)
}

export default HeroStats
