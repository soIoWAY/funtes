import { tests } from '@/content/tests'
import Image from 'next/image'
import Link from 'next/link'
import { FaCompass, FaUserFriends } from 'react-icons/fa'
import { GiDiabloSkull, GiStrawberry } from 'react-icons/gi'
import { PiLightning } from 'react-icons/pi'
import TestsFilter from './TestsFilter'

const Tests = () => {
	return (
		<div>
			<h1 className='text-3xl text-white font-bold pt-5'>Тести і турніри</h1>
			<TestsFilter />
			<div className='pb-3'>
				<ul className='flex gap-4 flex-wrap'>
					{tests.map((test, key) => (
						<li
							className='bg-gray-900 w-[24%] h-[440px] rounded-md hover:shadow-custom-border hover:bg-gray-950 transition-all relative flex flex-col justify-between hover:scale-105'
							key={key}
						>
							<div className='h-5/6'>
								<Link href={`/tests/prev/${test.id}`}>
									<Image
										src={test.src}
										width={350}
										height={350}
										alt='revolution'
										className='rounded-t-md object-cover h-3/6 hover:scale-100 transition-all'
									/>
								</Link>
								<div className='flex flex-col gap-3 px-3 py-2 h-3/6'>
									<Link
										href={`/tests/${test.id}`}
										className='text-white font-semibold text-xl hover:text-yellow-400 transition-all w-fit'
									>
										{test.h}
									</Link>
									<p className='text-gray-300 text-sm'>{test.p}</p>
								</div>
							</div>
							<div className='flex justify-between items-center h-fit px-3 border-t border-gray-700 text-white font-semibold py-2 text-sm'>
								<div className='flex gap-3'>
									<div className='flex items-center gap-1'>
										<PiLightning className='text-xl fill-gray-500' />
										<span>9.72</span>
									</div>
									<div className='flex items-center gap-1'>
										<FaUserFriends className='text-xl fill-gray-500' />
										<span>795</span>
									</div>
									<div className='flex items-center gap-1'>
										<FaCompass className='text-xl fill-gray-500' />
										<span>10</span>
									</div>
								</div>
								<div className='flex gap-3 text-xl items-center text-gray-500'>
									<span>
										<GiStrawberry />
									</span>
									<span>
										<GiDiabloSkull />
									</span>
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default Tests
