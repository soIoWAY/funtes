import { MdOutlineTaskAlt } from 'react-icons/md'

const RegisterAbout = () => {
	return (
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
	)
}

export default RegisterAbout
