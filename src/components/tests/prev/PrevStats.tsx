import { FaCrown, FaRegHeart, FaUserFriends } from 'react-icons/fa'
import { PiLightning } from 'react-icons/pi'

const PrevStats = () => {
	return (
		<div className='flex py-2 px-3 gap-3 rounded-full bg-[#192833] items-center mt-5'>
			<span className='text-white font-semibold text-sm border-r-2 border-gray-900 pr-3'>
				xzvetal
			</span>
			<span className='text-white font-semibold text-sm border-r-2 border-gray-900 pr-3 flex items-center gap-2'>
				<PiLightning className='fill-yellow-400 text-lg' />
				9.72
			</span>
			<span className='text-white font-semibold text-sm border-r-2 border-gray-900 pr-3 flex items-center gap-2'>
				<FaRegHeart className='fill-yellow-400 text-lg' />
				138
			</span>
			<span className='text-white font-semibold text-sm border-r-2 border-gray-900 pr-3 flex items-center gap-2'>
				<FaUserFriends className='fill-yellow-400 text-lg' />
				729
			</span>
			<span className='text-white font-semibold text-sm flex items-center gap-2'>
				<FaCrown className='fill-yellow-400 text-lg' />
				557
			</span>
		</div>
	)
}

export default PrevStats
