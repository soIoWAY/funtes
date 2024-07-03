import { FaTrophy } from 'react-icons/fa'

const FooterBiblioNav = () => {
	return (
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
	)
}

export default FooterBiblioNav
