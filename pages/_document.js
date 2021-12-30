import Document, { Html, Head, Main, NextScript } from 'next/document';
import { GTM_ID } from '@/lib/gtm';

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<link rel="preconnect" href="https://use.typekit.net" crossOrigin />
					<link rel="preload" as="style" href="https://use.typekit.net/fqs8gqy.css" />
					<link
						rel="stylesheet"
						href="https://use.typekit.net/fqs8gqy.css"
						media="print"
						onLoad="this.media='all'"
					/>

					<noscript>
						<link rel="stylesheet" href="https://use.typekit.net/fqs8gqy.css" />
					</noscript>
				</Head>
				<body>
					<noscript>
						<iframe
							src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
							height="0"
							width="0"
							style={{ display: 'none', visibility: 'hidden' }}
						/>
					</noscript>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
