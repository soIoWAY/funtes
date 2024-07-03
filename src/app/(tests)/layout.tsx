import Footer from '@/components/main/Footer'
import Header from '@/components/main/header/Header'

interface ITestsLayout {
	children: React.ReactNode
}

export default function TestsLayout({ children }: ITestsLayout) {
	return (
		<div className='min-h-screen'>
			<Header />
			{children}
			<Footer />
		</div>
	)
}
