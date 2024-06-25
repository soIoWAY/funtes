import { FaRegLightbulb, FaTrophy } from 'react-icons/fa'
import { GoRocket } from 'react-icons/go'

const Footer = () => {
	return (
		<div className='bg-gray-900 py-6'>
			<div className='w-11/12 m-auto flex gap-12'>
				<div className='w-4/12 flex flex-col gap-12'>
					<div className='flex flex-col gap-5'>
						<h1 className='text-3xl uppercase text-yellow-400 tracking-wider '>
							Funtes
						</h1>
						<p className='text-gray-300 text-sm text-left'>
							В нас розміщені тисячі різних тестів, з допомогою яких можна
							приємно провести час, дізнатись про себе щось нове і порівняти
							предпочтения з думкою широкої аудиторії.
						</p>
					</div>
					<div className='flex gap-6'>
						<div>
							<h3 className='text-gray-200 font-semibold'>По всіх питаннях:</h3>
							<p className='text-yellow-400 text-xl mt-4'>funtes@gmail.com</p>
							<h3 className='text-gray-200 font-semibold'>Ми в соц мережах</h3>
						</div>
						<div>
							<h3 className='text-gray-200 font-semibold'>Реклама на сайті:</h3>
							<p className='text-yellow-400 text-xl mt-4'>Замовити!</p>
						</div>
					</div>
				</div>
				<div className='w-8/12 flex justify-end gap-20'>
					<div>
						<div className='flex items-center gap-2'>
							<FaTrophy className='fill-yellow-400 text-2xl' />
							<h2 className='text-white font-semibold'>Тести</h2>
						</div>
						<ul className='mt-3 text-gray-300 flex flex-col gap-2 text-sm '>
							<li>Цікаві</li>
							<li>Нові</li>
							<li>Найкращі</li>
						</ul>
					</div>
					<div>
						<div className='flex items-center gap-2'>
							<GoRocket className='fill-yellow-400 text-2xl' />
							<h2 className='text-white font-semibold'>Топ</h2>
						</div>
						<ul className='mt-3 text-gray-300 flex flex-col gap-2 text-sm'>
							<li>Користувачів</li>
							<li>Тестів за весь час</li>
							<li>Тестів за місяць</li>
						</ul>
					</div>
					<div>
						<div className='flex items-center gap-2'>
							<FaTrophy className='fill-yellow-400 text-2xl' />
							<h2 className='text-white font-semibold'>Бібліотека</h2>
						</div>
						<ul className='mt-3 text-gray-300 flex flex-col gap-2 text-sm'>
							<li>Навчальні матеріали</li>
							<li>Політика конфіденційності</li>
							<li>Правила сайту</li>
						</ul>
					</div>
					<div>
						<div className='flex items-center gap-2'>
							<FaRegLightbulb className='fill-yellow-400 text-2xl' />
							<h2 className='text-white font-semibold'>Створити</h2>
						</div>
						<ul className='mt-3 text-gray-300 flex flex-col gap-2 text-sm'>
							<li>Тест</li>
							<li>Турнір</li>
							<li>Пост</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
