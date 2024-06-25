import { tests } from '@/content/tests'
import Image from 'next/image'
const ActualTests = () => {
	return (
		<div className='w-11/12 m-auto mt-16 mb-3'>
			<div className='flex justify-between items-center'>
				<div className='flex flex-col gap-3'>
					<h2 className='text-white text-3xl font-bold tracking-wider hover:text-yellow-400 w-fit transition-all'>
						Актуальні тести <span className='text-yellow-400'>{'>'}</span>
					</h2>
					<p className='text-gray-300'>
						Найбільш оцінені тести від наших авторів за тиждень.
					</p>
				</div>
				<button className='bg-gray-900 text-gray-300 px-5 py-4 rounded-md uppercase font-semibold text-sm hover:text-yellow-400 transition-all'>
					Всі тести
				</button>
			</div>
			<div className='mt-5 w-full'>
				<ul className='flex gap-4 flex-wrap '>
					{tests.map((test, key) => (
						<li
							className='bg-gray-900 w-[24%] h-96 rounded-md hover:shadow-custom-border hover:bg-gray-950 transition-all relative'
							key={key}
						>
							<Image
								src={test.src}
								width={350}
								height={350}
								alt='revolution'
								className='rounded-t-md object-cover h-2/4 hover:scale-100 transition-all'
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
		</div>
	)
}

export default ActualTests
