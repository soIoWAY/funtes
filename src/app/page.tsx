import ActualTests from '@/components/main/ActualTests'
import Footer from '@/components/main/Footer'
import Header from '@/components/main/Header'
import Hero from '@/components/main/Hero'

export default function Home() {
	return (
		<main className='min-h-screen'>
			<Header />
			<Hero />
			<ActualTests />
			<Footer />
		</main>
	)
}
