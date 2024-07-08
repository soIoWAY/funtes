'use client'

interface ITestQuestion {
	questionId: number
	questionText: string
	answers: string[]
	onAnswerSelect: (questionId: number, answerIndex: number) => void
	selectedAnswer: number | null
}
const TestQuestion = ({
	questionId,
	questionText,
	answers,
	selectedAnswer,
	onAnswerSelect,
}: ITestQuestion) => {
	return (
		<div>
			<h3 className='text-white text-xl mb-1'>{questionText}</h3>
			<div className='bg-gray-900 rounded-md'>
				{answers.map((answer, answerIndex) => (
					<div
						key={answerIndex}
						className={`text-center py-4 text-lg text-white cursor-pointer hover:text-yellow-400 transition-colors duration-300 ease-in-out border-yellow-500 ${
							selectedAnswer === answerIndex
								? 'border-r-4 rounded-md border-l-4 border-yellow-500'
								: ''
						}`}
						onClick={() => {
							onAnswerSelect(questionId, answerIndex)
						}}
					>
						<span>{answer}</span>
					</div>
				))}
			</div>
		</div>
	)
}

export default TestQuestion
