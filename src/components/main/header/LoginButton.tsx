import Link from 'next/link'
import { CiUser } from 'react-icons/ci'

const LoginButton = () => {
	return (
		<Link
			href='/auth'
			className='flex gap-2 items-center bg-yellow-500 px-2 sm:px-5 py-2 uppercase rounded-lg font-semibold border-[3px] border-gray-900 hover:border-yellow-200 hover:border-opacity-90 hover:shadow-lg text-sm tracking-widest transition-all focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50'
		>
			<div className='text-2xl'>
				<CiUser aria-hidden='true' />
			</div>
			<span className='hidden sm:block'>Вхід</span>
		</Link>
	)
}

export default LoginButton
