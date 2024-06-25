import Footer from '@/components/main/Footer'
import Header from '@/components/main/Header'

interface IAuthLayout {
	children: React.ReactNode
}

export default function AuthLayout({ children }: IAuthLayout) {
	return (
		<div className='min-h-screen'>
			<Header />
			{children}
			<Footer />
		</div>
	)
}
