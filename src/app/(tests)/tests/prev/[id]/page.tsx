import PrevHeader from '@/components/tests/prev/PrevHeader'
import PrevSocials from '@/components/tests/prev/PrevSocials'
import PrevStats from '@/components/tests/prev/PrevStats'
import { tests } from '@/content/tests'
import Image from 'next/image'
import Link from 'next/link'

export async function generateStaticParams() {
	return tests.map(test => ({
		id: test.id.toString(),
	}))
}

const TestPrev = ({ params }: { params: { id: string } }) => {
	const test = tests.find(test => test.id.toString() === params.id)
	return (
		<div className='w-2/6 m-auto'>
			<PrevHeader />
			<div className='flex justify-center flex-col items-center mt-5 mb-9 bg-gray-900 rounded-b-md rounded-t-md'>
				<Image
					src={test?.src || '/revolution.jpg'}
					width={525}
					height={525}
					alt='image'
					className='rounded-t-md max-h-[525px]'
				/>
				<PrevStats />
				<div className='flex flex-col gap-3 text-center px-9 py-3 '>
					<p className='text-sm text-gray-300'>Квіз - ідентифікація</p>
					<h1 className='text-white text-3xl font-semibold'>{test?.h}</h1>
					<p className='text-sm text-gray-200'>{test?.p}</p>
					<p className='text-sm text-gray-300'>10 запитань</p>
					<Link
						href={`/tests/test/${test?.id}`}
						className='bg-[#192833] w-full py-4 rounded-md text-white font-bold text-xl hover:bg-yellow-500 hover:text-black transition-all'
					>
						Поїхали!
					</Link>
				</div>
				<PrevSocials />
			</div>
		</div>
	)
}

export default TestPrev
