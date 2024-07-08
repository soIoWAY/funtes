import FooterDescription from './FooterDescription'
import FooterSocials from './FooterSocials'
import FooterBiblioNav from './footerNavs/FooterBiblioNav'
import FooterCreateNav from './footerNavs/FooterCreateNav'
import FooterTestsNav from './footerNavs/FooterTestsNav'
import FooterTopNav from './footerNavs/FooterTopNav'

const Footer = () => {
	return (
		<div className='bg-gray-900 py-6'>
			<div className='w-11/12 m-auto flex gap-12'>
				<div className='w-full sm:w-4/12 flex flex-col gap-12'>
					<FooterDescription />
					<FooterSocials />
				</div>
				<div className='w-8/12 hidden sm:flex justify-end gap-20'>
					<FooterTestsNav />
					<FooterTopNav />
					<FooterBiblioNav />
					<FooterCreateNav />
				</div>
			</div>
		</div>
	)
}

export default Footer
