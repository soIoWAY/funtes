import { FaRegLightbulb } from 'react-icons/fa'

const FooterCreateNav = () => {
	return (
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
	)
}

export default FooterCreateNav
