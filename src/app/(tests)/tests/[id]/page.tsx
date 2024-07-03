import TestHeader from '@/components/test/TestHeader'
import TestSocials from '@/components/test/TestSocials'
import TestsStats from '@/components/test/TestsStats'
import { tests } from '@/content/tests'
import Image from 'next/image'

export async function generateStaticParams() {
	return tests.map(test => ({
		id: test.id.toString(),
	}))
}

const TestDetail = ({ params }: { params: { id: string } }) => {
	const test = tests.find(test => test.id.toString() === params.id)
	return (
		<div className='w-2/6 m-auto'>
			<TestHeader />
			<div className='flex justify-center flex-col items-center mt-5 mb-9 bg-gray-900 rounded-b-md rounded-t-md'>
				<Image
					src={test?.src || '/revolution.jpg'}
					width={525}
					height={525}
					alt='image'
					className='object-cover rounded-t-md w-full'
				/>
				<TestsStats />
				<div className='flex flex-col gap-3 text-center px-9 py-3 '>
					<p className='text-sm text-gray-300'>Квіз - ідентифікація</p>
					<h1 className='text-white text-3xl font-semibold'>{test?.h}</h1>
					<p className='text-sm text-gray-200'>{test?.p}</p>
					<p className='text-sm text-gray-300'>10 запитань</p>
					<button className='bg-[#192833] w-full py-4 rounded-md text-white font-bold text-xl hover:bg-yellow-500 hover:text-black transition-all'>
						Поїхали!
					</button>
				</div>
				<TestSocials />
			</div>
		</div>
	)
}

export default TestDetail
