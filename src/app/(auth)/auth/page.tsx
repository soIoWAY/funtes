import LoginAbout from '@/components/auth/login/LoginAbout'
import LoginHeader from '@/components/auth/login/LoginHeader'
import { FaKey, FaRegUser } from 'react-icons/fa'

export default function LoginPage() {
	return (
		<div className='w-full flex h-[90vh]'>
			<LoginAbout />
			<div className='w-4/12 bg-gray-700 px-16 py-20'>
				<LoginHeader />
				<form className='mt-8 flex flex-col gap-5 w-full'>
					<div className='flex items-center bg-[#192833] w-full rounded-md px-3 py-4'>
						<FaRegUser className='fill-yellow-400 text-2xl' />
						<input
							type='text'
							className='bg-[#192833] outline-none rounded-md px-4 font-semibold text-white text-lg'
							placeholder='Логін'
						/>
					</div>
					<div className='flex items-center bg-[#192833] rounded-md px-3 py-4 w-full'>
						<FaKey className='fill-yellow-400 text-2xl' />
						<input
							type='password'
							placeholder='Пароль'
							className='bg-[#192833] outline-none rounded-md px-4'
						/>
					</div>
					<p className='text-center text-gray-300'>Забули пароль?</p>
					<input
						type='submit'
						value='Ввійти'
						className='bg-[#192833] rounded-md w-full py-4 text-yellow-400 uppercase text-sm font-bold hover:bg-yellow-400 hover:text-[#192833] '
					/>
				</form>
			</div>
		</div>
	)
}
