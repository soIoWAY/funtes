import HeroHelp from './HeroHelp'
import HeroNews from './HeroNews'
import HeroStats from './HeroStats'
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
