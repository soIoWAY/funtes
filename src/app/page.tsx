import ActualTests from '@/components/main/actualTests/ActualTests'
import Footer from '@/components/main/footer/Footer'
import Header from '@/components/main/header/Header'
import Hero from '@/components/main/hero/Hero'

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
