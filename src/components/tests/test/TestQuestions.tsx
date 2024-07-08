'use client'

import { useEffect, useState } from 'react'
import TestQuestion from './TestQuestion'
import TestResult from './TestResult'

const questions = [
	{
		id: 1,
		text: 'Як би ви описали свою особистість?',
		answers: [
			'Я дуже енергійний і оптимістичний',
			'Я спокійний і стриманий, але завжди готовий до дії',
			'Я впевнений у собі і люблю кидати виклики',
			'Я харизматичний і впевнений у своїх здібностях',
			'Я маю двоїсту натуру і можу бути небезпечним',
			'Я розважливий і стратегічний',
			'Я впертий і рішучий',
			'Я відданий своїм ідеалам',
			'Я дружелюбний і захищаю своїх друзів',
			'Я незалежний і цілеспрямований',
		],
	},
	{
		id: 2,
		text: 'Як ви зазвичай вирішуєте конфлікти?',
		answers: [
			'Прагну знайти компроміс',
			'Використовую стратегічний підхід',
			'Стою на своєму і не поступаюсь',
			'Використовую свої навички та авторитет',
			'Користуюся страхом і силою',
			'Маніпулюю іншими для досягнення своїх цілей',
			'Відстоюю свою точку зору',
			'Вирішую конфлікти силою',
			'Прагну захистити слабших ',
			'Вимагаю поваги до своїх рішень',
		],
	},
	{
		id: 3,
		text: 'Що для вас найважливіше в житті?',
		answers: [
			'Дружба і взаємопідтримка',
			'Досягнення своїх цілей',
			'Особиста гордість і честь',
			'Визнання та успіх',
			'Влада і контроль',
			'Родинна гордість',
			'Сила та особистий розвиток',
			'Дружба і захист інших',
			'Незалежність і самостійність',
		],
	},
	{
		id: 4,
		text: 'Як ви проводите свій вільний час?',
		answers: [
			'Займаюся спортом або фізичною активністю',
			'Читаю книги або займаюся навчанням',
			'Читаю книги або займаюся навчанням',
			'Навчаю інших або покращую свої навички',
			'Планую свої наступні кроки',
			'Розробляю нові стратегії',
			'Відпочиваю та медитую',
			'Тренуюся і покращую свої фізичні можливості',
			'Граюся і взаємодію з друзями',
			'Займаюся фізичною підготовкою або тренуванням',
		],
	},
	{
		id: 5,
		text: 'Яку роль ви б хотіли грати у команді?',
		answers: [
			'Лідер, який надихає інших',
			'Стратег, який планує дії',
			'Воїн, який бореться на передовій',
			'Вчитель, який допомагає іншим зростати',
			'Керівник, який контролює все',
			'Маніпулятор, який впливає на рішення інших',
			'Відданий союзник',
			'Сила, яка підтримує команду',
			'Захисник, який підтримує слабших',
			'Незалежний діяч',
		],
	},
	{
		id: 6,
		text: 'Яка ваша улюблена зброя або інструмент?',
		answers: [
			'Мої кулаки',
			'Шаманські техніки',
			'Цвяхи та молоток',
			'Магічні техніки',
			'Моя власна сила',
			'Маніпулятивні техніки',
			'Вогнепальна зброя',
			'Сила моїх рук',
			'Своє тіло та його можливості',
			'Традиційна зброя',
		],
	},
	{
		id: 7,
		text: 'Як ви реагуєте на небезпеку?',
		answers: [
			"Б'юся до кінця",
			'Аналізую ситуацію і приймаю обдумані рішення',
			'Виступаю на передовій і не боюся ризику',
			'Використовую свої навички для захисту',
			'Використовую свою силу для знищення загрози',
			'Використовую маніпуляції для контролю ситуації',
			'Зберігаю спокій і дію обдумано',
			'Виступаю агресивно і рішуче',
			'Захищаю своїх друзів',
			'Використовую свою силу для захисту',
		],
	},
	{
		id: 8,
		text: 'Як ви ставитеся до своїх ворогів?',
		answers: [
			'Намагатимусь знайти спільну мову',
			'Буду тримати їх на відстані',
			'Показуватиму свою силу і не поступатимуся',
			'Використовуватиму свою перевагу',
			'Знищуватиму їх без вагань',
			'Маніпулюватиму ними для своїх цілей',
			'Показуватиму свою перевагу',
			'Виступатиму проти них агресивно',
			'Захищатиму своїх друзів від них',
			'Діятиму обережно і стратегічно',
		],
	},
	{
		id: 9,
		text: 'Як би ви описали свої відносини з друзями?',
		answers: [
			'Взаємна підтримка і допомога',
			'Взаємна повага і розуміння',
			'Спільна боротьба і пригоди',
			'Наставництво і допомога',
			'Контроль і маніпуляція',
			'Використання для досягнення власних цілей',
			'Підтримка і захист',
			'Сильна відданість',
			'Весела компанія і взаємодія',
			'Спільне тренування і розвиток',
		],
	},
	{
		id: 10,
		text: 'Який ваш основний життєвий принцип?',
		answers: [
			'Допомога іншим і саморозвиток',
			'Досягнення справедливості',
			'Не здаватися за жодних обставин',
			'Завжди вдосконалювати свої навички',
			'Контроль і влада над ситуацією',
			'Вплив на інших через маніпуляції',
			'Відданість своїм принципам',
			'Фізична сила і міць',
			'Захист слабших і допомога друзям',
			'Незалежність і самостійність',
		],
	},
]

const characters = {
	0: { name: 'Юдзі Ітадору', img: '/jjk/itadori.jpg' },
	1: { name: 'Мегумі Фушігуро', img: '/jjk/fushiguro.jpg' },
	2: { name: 'Нобара Кугісакі', img: '/jjk/nobara.jpg' },
	3: { name: 'Сатору Годжо', img: '/jjk/satoru.jpg' },
	4: { name: 'Рюмен Сукуна', img: '/jjk/sukuna.jpg' },
	5: { name: 'Гето Сугуру', img: '/jjk/geto.jpg' },
	6: { name: 'Май Зенін', img: '/jjk/mai.jpg' },
	7: { name: 'Тодо Аой', img: '/jjk/todo.jpg' },
	8: { name: 'Панда', img: '/jjk/panda.jpg' },
	9: { name: 'Макі Зенін', img: '/jjk/maki.jpg' },
}

const TestQuestions = () => {
	const [selectedAnswers, setSelectedAnswers] = useState<{
		[key: number]: number
	}>({})
	const [testFinished, setTestFinished] = useState(false)

	useEffect(() => {
		const savedAnswers = localStorage.getItem('answers')
		if (savedAnswers) {
			setSelectedAnswers(JSON.parse(savedAnswers))
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
		setSelectedAnswers(newSelectedAnswers)
		localStorage.setItem('answers', JSON.stringify(newSelectedAnswers))
	}

	return (
		<div className='w-9/12 m-auto flex flex-col'>
			{!testFinished ? (
				<>
					<div className='flex flex-col gap-5'>
						{questions.map(question => (
							<TestQuestion
								key={question.id}
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
