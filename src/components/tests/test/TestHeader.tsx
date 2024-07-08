import Link from 'next/link'
import { FaHome } from 'react-icons/fa'

interface ITestHeader {
	testName: string
}

const TestHeader = ({ testName }: ITestHeader) => {
	return (
		<div className='flex justify-between items-center text-white py-2 text-lg px-3 sm:px-0'>
			<div className='flex gap-5 items-center'>
				<h3 className=' font-semibold'>Funtes - {testName}</h3>
				<span>Питання: 1/10</span>
			</div>
			<div>
				<Link
					href='/tests'
					className='flex items-center gap-1 hover:text-yellow-400 transition-all'
				>
					<FaHome className='fill-yellow-400 text-base' />
					Вихід
				</Link>
			</div>
		</div>
	)
}

export default TestHeader
