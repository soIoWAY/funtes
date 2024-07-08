import { FaInstagram, FaRegCopy, FaTelegram } from 'react-icons/fa'

const PrevSocials = () => {
	return (
		<div className='flex gap-3 mb-3'>
			<button className='bg-sky-400 p-1 rounded-md border-4 border-sky-600'>
				<FaTelegram className='fill-white text-2xl' />
			</button>
			<button className='bg-pink-500 p-1 rounded-md border-4 border-pink-700'>
				<FaInstagram className='fill-white text-2xl' />
			</button>
			<button className='bg-yellow-400 p-1 rounded-md border-4 border-yellow-500'>
				<FaRegCopy className='fill-black text-2xl' />
			</button>
		</div>
	)
}

export default PrevSocials
