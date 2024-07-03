import Link from 'next/link'

const LoginHeader = () => {
	return (
		<div className='font-bold text-2xl flex gap-9'>
			<span className='text-yellow-400'>Вхід</span>
			<Link href='/auth/register' className='text-gray-300'>
				Реєстрація
			</Link>
		</div>
	)
}

export default LoginHeader
