import { FaRegCalendar, FaRegCommentDots } from 'react-icons/fa'

const HeroNews = () => {
	return (
		<div className='flex-1 sm:flex-none sm:w-3/12 bg-gray-900 rounded-md px-3 sm:px-6 py-4 sm:py-6 flex flex-col justify-between hover:shadow-custom-border transition-all animate-border-pulse'>
			<div className='flex justify-between flex-wrap gap-4'>
				<h2 className='bg-black text-xs sm:text-base text-white w-fit px-2 sm:px-3 py-2 rounded-md'>
					новини сайту
				</h2>
				<div className='flex items-center gap-3 text-white'>
					<div className='flex items-center gap-1'>
						<FaRegCommentDots className='text-base sm:text-xl' />
						<span className='text-xs sm:text-sm'>23</span>
					</div>
					<div className='flex items-center gap-1'>
						<FaRegCalendar className='text-base sm:text-xl' />
						<span className='text-xs sm:text-sm'>01.07.2024</span>
					</div>
				</div>
			</div>
			<p className='text-white text-left text-base sm:text-lg font-semibold'>
				Кращі з кращих! Червневий дайджест!
			</p>
		</div>
	)
}

export default HeroNews
