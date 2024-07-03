import { FaTrophy } from 'react-icons/fa'

const FooterTestsNav = () => {
	return (
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
	)
}

export default FooterTestsNav
