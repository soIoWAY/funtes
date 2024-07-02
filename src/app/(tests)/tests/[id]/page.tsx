import { tests } from '@/content/tests'
import Image from 'next/image'
import Link from 'next/link'
import {
	FaArrowLeft,
	FaCrown,
	FaInstagram,
	FaRegCopy,
	FaRegHeart,
	FaTelegram,
	FaUserFriends,
} from 'react-icons/fa'
import { IoIosStats } from 'react-icons/io'
import { PiLightning } from 'react-icons/pi'

export async function generateStaticParams() {
	return tests.map(test => ({
		id: test.id.toString(),
	}))
}

const TestDetail = ({ params }: { params: { id: string } }) => {
	const test = tests.find(test => test.id.toString() === params.id)
	return (
		<div className='w-2/6 m-auto'>
			<div className='mt-5 flex justify-between items-center text-gray-200 text-sm font-semibold'>
				<Link href='/tests' className='flex items-center gap-2 uppercase'>
					<FaArrowLeft className='text-lg' />
					<span className='hover:text-yellow-400 transition-all'>Назад</span>
				</Link>
				<button className='uppercase flex items-center gap-2'>
					<span className='hover:text-yellow-400 transition-all'>
						Статистика
					</span>
					<IoIosStats className='text-lg' />
				</button>
			</div>
			<div className='flex justify-center flex-col items-center mt-5 mb-9 bg-gray-900 rounded-b-md rounded-t-md'>
				<Image
					src={test?.src || '/revolution.jpg'}
					width={525}
					height={525}
					alt='image'
					className='object-cover rounded-t-md w-full'
				/>
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
				<div className='flex flex-col gap-3 text-center px-9 py-3 '>
					<p className='text-sm text-gray-300'>Квіз - ідентифікація</p>
					<h1 className='text-white text-3xl font-semibold'>{test?.h}</h1>
					<p className='text-sm text-gray-200'>{test?.p}</p>
					<p className='text-sm text-gray-300'>10 запитань</p>
					<button className='bg-[#192833] w-full py-4 rounded-md text-white font-bold text-xl hover:bg-yellow-500 hover:text-black transition-all'>
						Поїхали!
					</button>
				</div>
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
			</div>
		</div>
	)
}

export default TestDetail
