import Link from 'next/link'
import { FaRegBookmark, FaRegLightbulb, FaTrophy } from 'react-icons/fa'
import { GoRocket } from 'react-icons/go'

const Navbar = () => {
	const navLinks = [
		{
			href: '/',
			text: 'Головна',
			icon: <FaRegBookmark className='fill-yellow-400' />,
		},
		{
			href: '/tests',
			text: 'Тести',
			icon: <FaTrophy className='fill-yellow-400' />,
		},
		{
			href: '/',
			text: 'Топи',
			icon: <GoRocket className='fill-yellow-400' />,
		},
		{
			href: '/',
			text: 'Створити',
			icon: <FaRegLightbulb className='fill-yellow-400' />,
		},
	]
	const liStyles =
		'flex items-center gap-2 hover:text-yellow-400 cursor-pointer transition-all'
	return (
		<nav className='hidden sm:block'>
			<ul className='flex gap-10 text-white uppercase font-semibold'>
				{navLinks.map((link, index) => (
					<li key={index}>
						<Link className={liStyles} href={link.href}>
							{link.icon}
							{link.text}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Navbar
