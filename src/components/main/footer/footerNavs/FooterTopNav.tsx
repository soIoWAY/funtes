import { GoRocket } from 'react-icons/go'

const FooterTopNav = () => {
	return (
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
	)
}

export default FooterTopNav
