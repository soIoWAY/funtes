import Link from 'next/link'
import { CiMail } from 'react-icons/ci'
import { FaKey, FaRegUser } from 'react-icons/fa'
import { MdOutlineTaskAlt } from 'react-icons/md'

export default function RegisterPage() {
	return (
		<div className='w-full flex h-[90vh]'>
			<div className='w-8/12 h-full flex flex-col items-center m-auto justify-center'>
				<div className='flex flex-col items-center justify-center text-center gap-12'>
					<h1 className='uppercase text-yellow-400 text-3xl font-semibold'>
						Вітаю!
					</h1>
					<p className='text-white text-lg'>
						Надіюсь вам вже в нас подобається, а зареєструвавшись ви зможете:
					</p>
				</div>
				<div className='w-3/4 mt-6 flex flex-col gap-3'>
					<div className='bg-gray-700 py-4 rounded-md text-white flex gap-2 items-center px-3'>
						<MdOutlineTaskAlt className='fill-yellow-400 text-xl' />
						додавати на сайт власні тести
					</div>
					<div className='bg-gray-700 py-4 rounded-md text-white flex gap-2 items-center px-3'>
						<MdOutlineTaskAlt className='fill-yellow-400 text-xl' />
						нарощувати особистий рейтинг, отримувати досягнення і нагороди
					</div>
					<div className='bg-gray-700 py-4 rounded-md text-white flex gap-2 items-center px-3'>
						<MdOutlineTaskAlt className='fill-yellow-400 text-xl' />
						дивитись історію проходжень
					</div>
					<div className='bg-gray-700 py-4 rounded-md text-white flex gap-2 items-center px-3'>
						<MdOutlineTaskAlt className='fill-yellow-400 text-xl' />
						встановлювати персональні настройки видачі тестів
					</div>
				</div>
			</div>
			<div className='w-4/12 bg-gray-700 px-16 py-20'>
				<div className='font-bold text-2xl flex gap-9'>
					<Link href='/auth' className='text-gray-300'>
						Вхід
					</Link>
					<span className='text-yellow-400'>Реєстрація </span>
				</div>
				<form className='mt-8 flex flex-col gap-5 w-full'>
					<div className='flex items-center bg-[#192833] w-full rounded-md px-3 py-4'>
						<FaRegUser className='fill-yellow-400 text-2xl' />
						<input
							type='text'
							className='bg-[#192833] outline-none rounded-md px-4 font-semibold text-white text-lg'
							placeholder='Логін'
						/>
					</div>
					<div className='flex items-center bg-[#192833] w-full rounded-md px-3 py-4'>
						<CiMail className='fill-yellow-400 text-2xl' />
						<input
							type='text'
							className='bg-[#192833] outline-none rounded-md px-4 font-semibold text-white text-lg'
							placeholder='Email адреса'
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
					<div className='flex items-center bg-[#192833] rounded-md px-3 py-4 w-full'>
						<FaKey className='fill-yellow-400 text-2xl' />
						<input
							type='password'
							placeholder='Повторіть пароль'
							className='bg-[#192833] outline-none rounded-md px-4'
						/>
					</div>
					<div className='bg-[#192833] p-5 rounded-md'>
						<h3 className='text-white'>Реєструючись ви погоджуєтесь з:</h3>
						<div className='mt-3'>
							<p className='text-yellow-400'>Правилами сайту</p>
							<p className='text-yellow-400'>Політикою конфіденційності</p>
						</div>
					</div>
					<input
						type='submit'
						value='зареєструватись'
						className='bg-[#192833] rounded-md w-full py-4 text-yellow-400 uppercase text-sm font-bold hover:bg-yellow-400 hover:text-[#192833] '
					/>
				</form>
			</div>
		</div>
	)
}
