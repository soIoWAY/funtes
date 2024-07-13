import { tests } from '@/content/tests'
import Image from 'next/image'
import Link from 'next/link'
import ActualTestsHeader from './ActualTestsHeader'
const ActualTests = () => {
	return (
		<div className='w-11/12 m-auto mt-16 mb-3'>
			<ActualTestsHeader />
			<div className='mt-5 w-full'>
				<ul className='flex gap-4 sm:flex-wrap '>
					{tests.map((test, key) => (
						<li
							className='bg-gray-900 w-full sm:w-[24%] h-96 rounded-md hover:shadow-custom-border hover:bg-gray-950 transition-all relative hover:scale-105'
							key={key}
						>
							<Image
								src={test.src}
								width={350}
								height={350}
								alt='revolution'
								className='rounded-t-md object-cover w-full h-2/4 hover:scale-100 transition-all'
							/>
							<div className='flex flex-col gap-3 px-3 py-2 h-2/4'>
								<h2 className='text-white font-semibold text-xl hover:text-yellow-400 transition-all w-fit'>
									{test.h}
								</h2>
								<p className='text-gray-300 text-sm'>{test.p}</p>
							</div>
						</li>
					))}
				</ul>
			</div>
			<div className='bg-gray-900 w-full mt-3 text-center rounded-md '>
				<Link
					href='/tests'
					className='block sm:hidden py-3 bg-gray-900 text-center text-sm mt-2 text-white  active:text-yellow-400 font-semibold uppercase'
				>
					Всі тести
				</Link>
			</div>
		</div>
	)
}

export default ActualTests
