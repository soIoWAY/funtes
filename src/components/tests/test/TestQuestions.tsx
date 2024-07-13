'use client'

import { useEffect, useState } from 'react'
import TestQuestion from './TestQuestion'
import TestResult from './TestResult'

type Character = {
	name: string
	img: string
}

interface ITestQuestions {
	questions: { id: number; text: string; answers: string[] }[]
	characters: { [key: number]: Character }
}

const TestQuestions = ({ questions, characters }: ITestQuestions) => {
	const [selectedAnswers, setSelectedAnswers] = useState<{
		[key: number]: number
	}>({})
	const [selectedQuestions, setSelectedQuestions] = useState<number[]>([])
	const [testFinished, setTestFinished] = useState(false)

	useEffect(() => {
		const savedAnswers = localStorage.getItem('answers')
		const savedQuestions = localStorage.getItem('questions')

		if (savedAnswers) {
			setSelectedAnswers(JSON.parse(savedAnswers))
		}
		if (savedQuestions) {
			setSelectedQuestions(JSON.parse(savedQuestions))
		}
	}, [])

	const calculateAnswers = () => {
		const answerCounts: { [key: number]: number } = {}

		Object.values(selectedAnswers).forEach(answerIndex => {
			if (answerCounts[answerIndex]) {
				answerCounts[answerIndex]++
			} else {
				answerCounts[answerIndex] = 1
			}
		})

		let maxCount = 0
		let mostPopularAnswer: number | null = null

		Object.entries(answerCounts).forEach(([answerIndex, count]) => {
			const index = parseInt(answerIndex)
			if (count > maxCount) {
				maxCount = count
				mostPopularAnswer = index
			}
		})
		return mostPopularAnswer
	}

	const selectAnswerHandler = (questionId: number, answerIndex: number) => {
		const newSelectedAnswers = { ...selectedAnswers, [questionId]: answerIndex }
		const newSelectedQuestions = [...selectedQuestions, questionId]
		setSelectedAnswers(newSelectedAnswers)
		setSelectedQuestions(newSelectedQuestions)
		localStorage.setItem('answers', JSON.stringify(newSelectedAnswers))
		localStorage.setItem('questions', JSON.stringify(newSelectedQuestions))
	}

	return (
		<div className='w-9/12 m-auto flex flex-col'>
			{!testFinished ? (
				<>
					<div className='flex flex-col gap-5'>
						{questions.map(question => (
							<TestQuestion
								key={question.id}
								currentQuestion={selectedQuestions.length}
								questionId={question.id}
								questionText={question.text}
								answers={question.answers}
								onAnswerSelect={selectAnswerHandler}
								selectedAnswer={selectedAnswers[question.id] ?? null}
							/>
						))}
					</div>
					<button
						className='bg-yellow-500 py-3 my-5 hover:bg-yellow-400 transition-all'
						onClick={() => setTestFinished(!testFinished)}
					>
						Завершити тестування
					</button>
				</>
			) : (
				<TestResult
					characters={characters}
					mostPopularAnswer={calculateAnswers() || 0}
				/>
			)}
		</div>
	)
}

export default TestQuestions
