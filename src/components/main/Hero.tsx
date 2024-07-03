import HeroHelp from './hero/HeroHelp'
import HeroNews from './hero/HeroNews'
import HeroStats from './hero/HeroStats'
const Hero = () => {
	return (
		<div className='flex w-11/12 m-auto justify-between mt-12'>
			<HeroStats />
			<HeroNews />
			<HeroHelp />
		</div>
	)
}

export default Hero
