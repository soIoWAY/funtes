import Link from 'next/link'

const RegisterHeader = () => {
	return (
		<div className='font-bold text-2xl flex gap-9'>
			<Link href='/auth' className='text-gray-300'>
				Вхід
			</Link>
			<span className='text-yellow-400'>Реєстрація </span>
		</div>
	)
}

export default RegisterHeader
