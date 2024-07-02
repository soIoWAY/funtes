import Link from 'next/link'
import { CiUser } from 'react-icons/ci'
import { FaRegBookmark, FaRegLightbulb, FaTrophy } from 'react-icons/fa'
import { GoRocket } from 'react-icons/go'
const Header = () => {
	const liStyles =
		'flex items-center gap-2 hover:text-yellow-400 cursor-pointer transition-all'
	return (
		<div className='bg-gray-900 py-3'>
			<div className='flex justify-between items-center w-11/12 m-auto'>
				<Link
					href='/'
					className='text-3xl uppercase text-yellow-400 tracking-wider '
				>
					Funtes
				</Link>
				<nav>
					<ul className='flex gap-10 text-white uppercase font-semibold'>
						<li>
							<Link href='/' className={liStyles}>
								<FaRegBookmark className='fill-yellow-400' />
								Головна
							</Link>
						</li>
						<li>
							<Link href='/tests' className={liStyles}>
								<FaTrophy className='fill-yellow-400' />
								Тести
							</Link>
						</li>
						<li className={liStyles}>
							<GoRocket className='fill-yellow-400' />
							Топи
						</li>
						<li className={liStyles}>
							<FaRegLightbulb className='fill-yellow-400' />
							Створити
						</li>
					</ul>
				</nav>
				<Link
					href='/auth'
					className='flex gap-2 items-center bg-yellow-500 px-5 py-2 uppercase rounded-lg font-semibold border-[3px] border-gray-900 hover:border-yellow-200 hover:border-opacity-90 hover:shadow-lg text-sm tracking-widest transition-all focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50'
				>
					<div className='text-2xl'>
						<CiUser aria-hidden='true' />
					</div>
					<span>Вхід</span>
				</Link>
			</div>
		</div>
	)
}

export default Header
