import Link from 'next/link'
import LoginButton from './LoginButton'
import Navbar from './Navbar'

const Header = () => {
	return (
		<div className='bg-gray-900 py-3'>
			<div className='flex justify-between items-center w-11/12 m-auto'>
				<Link
					href='/'
					className='text-3xl uppercase text-yellow-400 tracking-wider '
				>
					Funtes
				</Link>
				<Navbar />
				<LoginButton />
			</div>
		</div>
	)
}

export default Header
