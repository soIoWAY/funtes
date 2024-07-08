import TestHeader from '@/components/tests/test/TestHeader'
import TestQuestions from '@/components/tests/test/TestQuestions'
import { tests } from '@/content/tests'

export async function generateStaticParams() {
	return tests.map(test => ({
		id: test.id.toString(),
	}))
}

const TestDetail = ({ params }: { params: { id: string } }) => {
	const test = tests.find(test => test.id.toString() === params.id)
	return (
		<div className='w-full sm:w-3/6 m-auto py-2'>
			<TestHeader testName={test?.h || ''} />
			<TestQuestions />
		</div>
	)
}

export default TestDetail
