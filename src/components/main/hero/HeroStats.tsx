import { FaRegStar } from 'react-icons/fa'
import { MdPeopleOutline } from 'react-icons/md'
import { TiUserAddOutline } from 'react-icons/ti'

const HeroStats = () => {
	return (
		<div className='bg-gray-900 w-4/12 rounded-md flex justify-between items-center px-6 h-60 text-white'>
			<div className='flex flex-col gap-2'>
				<FaRegStar className='fill-red-500 text-6xl' />
				<span className='font-bold text-3xl'>163</span>
				<p className='text-sm text-gray-300'>Тестів і квізів</p>
			</div>
			<div className='flex flex-col gap-2'>
				<MdPeopleOutline className='fill-emerald-500 text-6xl' />
				<span className='font-bold text-3xl'>7353</span>
				<p className='text-sm text-gray-300'>Членів спільноти</p>
			</div>
			<div className='flex flex-col gap-2'>
				<TiUserAddOutline className='fill-purple-600 text-6xl' />
				<span className='font-bold text-3xl'>3944</span>
				<p className='text-sm text-gray-300'>Користувачів вчора</p>
			</div>
		</div>
	)
}

export default HeroStats
