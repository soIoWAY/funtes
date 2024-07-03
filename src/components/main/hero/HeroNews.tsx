import { FaRegCalendar, FaRegCommentDots } from 'react-icons/fa'

const HeroNews = () => {
	return (
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
	)
}

export default HeroNews
