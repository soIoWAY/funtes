import Image from 'next/image'
import Link from 'next/link'

type Character = {
	name: string
	img: string
}

interface ITestResult {
	characters: { [key: number]: Character }
	mostPopularAnswer: number
}

const TestResult = ({ characters, mostPopularAnswer }: ITestResult) => {
	return (
		<div className='text-center text-white flex flex-col items-center gap-4 mt-2'>
			<h2 className='text-2xl font-semibold'>
				Ти - {characters[mostPopularAnswer].name}
			</h2>
			<Image
				src={characters[mostPopularAnswer].img}
				width={500}
				height={500}
				alt={characters[mostPopularAnswer].img}
			/>
			<Link
				href='/tests'
				className='bg-yellow-500 w-1/2 py-2 text-xl text-black'
			>
				Назад
			</Link>
		</div>
	)
}

export default TestResult
