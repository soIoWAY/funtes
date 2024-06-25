import { FaRegCalendar, FaRegCommentDots, FaRegStar } from 'react-icons/fa'
import { MdPeopleOutline } from 'react-icons/md'
import { TiUserAddOutline } from 'react-icons/ti'
const Hero = () => {
	return (
		<div className='flex w-11/12 m-auto justify-between mt-12'>
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
			<div className='w-3/12 bg-gray-900 rounded-md px-6 py-6 flex flex-col justify-between hover:shadow-custom-border transition-all animate-border-pulse'>
				<div className='flex justify-between'>
					<h2 className='bg-black text-white w-fit px-3 py-1 rounded-md'>
						новини сайту
					</h2>
					<div className='flex items-center gap-3 text-white'>
						<div className='flex items-center gap-1'>
							<FaRegCommentDots className='text-xl' />
							<span className='text-sm'>23</span>
						</div>
						<div className='flex items-center gap-1'>
							<FaRegCalendar className='text-xl' />
							<span className='text-sm'>01.06.2024</span>
						</div>
					</div>
				</div>
				<p className='text-white text-lg font-semibold'>
					Кращі з кращих! Травневий дайджест!
				</p>
			</div>
			<div className='w-3/12 bg-gray-900 rounded-md px-6 py-6 flex flex-col justify-between hover:shadow-custom-border transition-all'>
				<h2 className='bg-black text-white w-fit px-3 py-1 rounded-md'>
					корисні матеріали
				</h2>
				<p className='text-white text-lg font-semibold'>
					"Що тут відбувається?" або Короткий довідник Фантеса початківця
				</p>
			</div>
		</div>
	)
}

export default Hero
