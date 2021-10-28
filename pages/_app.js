import '../global/globalStyles/globals.css'
import { ThemeProvider } from 'styled-components'
import Head from 'next/head'
import { UseWalletProvider } from 'use-wallet'
// import Banner from '../components/Banner'
// import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'

// const client = new ApolloClient({
// 	cache: new InMemoryCache(),
// 	uri: 'https://api.thegraph.com/subgraphs/name/mauricechristopher/nftyswaps',
// })

const theme = {
	device: {
		mobileS: '320px',
		mobileM: '375px',
		mobileL: '425px',
		tablet: '768px',
		laptop: '1025px',
		laptopL: '1440px',
		desktop: '2560px',
	},
	colors: {
		white: '#f2f2f2',
		primaryGray: '#333333',
		secondaryGray: '#222222',
		lightBlue: '#9BE5F6',
		blue: '#62D1F9',
		teal: '#4791C0',
		lightPurp: '#B8AAF2',
		darkPurp: '#7073E1',
		darkestPurp: '#161630',
	},
	fonts: {
		raleway: 'Raleway, sans-serif',
		montserrat: 'Montserrat, sans-serif',
	},
}

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>CryptoShips</title>
				<meta charSet='utf-8' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1'
				/>
				<meta
					name='description'
					content='Traveling the metaverse'
				></meta>
				<link rel='shortcut icon' href='/images/Logo_400x400.png' />
				<link rel='preconnect' href='https://fonts.gstatic.com' />
				<link
					href='https://fonts.googleapis.com/css2?family=Montserrat&family=Raleway:wght@300&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<UseWalletProvider chainId={4}>
				<ThemeProvider theme={theme}>
					{/* <Banner /> */}
					<Component {...pageProps} />
				</ThemeProvider>
			</UseWalletProvider>
		</>
	)
}

export default MyApp
