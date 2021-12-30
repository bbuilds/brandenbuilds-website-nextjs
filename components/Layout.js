import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useAppContext } from '../context/AppContext';

export default function Layout({ preview, children }) {
	const { mobileMenuState, toggleMenuState, falseMenuState } = useAppContext();
	return (
		<>
			<Header
				mobileMenuState={mobileMenuState}
				toggleMenuState={toggleMenuState}
				falseMenuState={falseMenuState}
			/>
			<div className="min-h-screen">
				<main>{children}</main>
			</div>
			<Footer />
		</>
	);
}
