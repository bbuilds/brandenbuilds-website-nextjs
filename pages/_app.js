import { useEffect } from 'react';
import Script from 'next/script';
import { useRouter } from 'next/router';
import { GTM_ID, pageview } from '@/lib/gtm';
import '@/styles/globals.css';
import { AppWrapper } from '../context/AppContext';
import AOS from 'aos';
import 'aos/dist/aos.css';
function MyApp({ Component, pageProps }) {
	const router = useRouter();
	useEffect(() => {
		router.events.on('routeChangeComplete', pageview);
		return () => {
			router.events.off('routeChangeComplete', pageview);
		};
	}, [router.events]);

	useEffect(() => {
		AOS.init({
			once: true
		});
	}, []);
	return (
		<>
			<Script
				id="bbuilds-GTM"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${GTM_ID}');
          `
				}}
			/>
			<AppWrapper>
				<Component {...pageProps} />
			</AppWrapper>
		</>
	);
}

export default MyApp;
