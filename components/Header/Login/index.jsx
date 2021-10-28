import React from 'react'
import { useWallet } from 'use-wallet'
import Link from 'next/link'

import {
	Avatar,
	Fox,
	LoginText,
	LoginWrapper,
	LoggedInWrapper,
	InnerLoggedInWrapper,
	AddressText,
	Dropdown,
	DropdownContent,
	DropdownLink,
} from '../Styles/HeaderStyles'

const Login = () => {
	const wallet = useWallet()

	// checks if wallet is set to Rinkeby, then connects if valid
	const handleClick = () => {
		if (wallet.status == 'error')
			wallet.error.name == 'ChainUnsupportedError'
				? alert('Wrong Network')
				: alert(wallet.error.message)
		else wallet.connect()
	}

	return wallet.status === 'connected' ? (
		<LoggedInWrapper>
			<AddressText>{`${wallet.account.substr(
				0,
				6
			)}....${wallet.account.substr(38, 42)}`}</AddressText>
			<Avatar seed={wallet.account.toLowerCase()} size={8} scale={4} />
		</LoggedInWrapper>
	) : (
		<LoginWrapper onClick={handleClick}>
			{/* <Fox src='https://i.ibb.co/s6gwjX1/metamask-logo.png' /> */}
			<LoginText>Connect</LoginText>
		</LoginWrapper>
	)
}

export default Login

// <Dropdown>

// 	<DropdownContent>
// 		<DropdownLink>
// 			Balance: {wallet.balance / 1000000000000000000} ETH
// 		</DropdownLink>
// 		<Link href='/assets'>
// 			<DropdownLink>My Assets</DropdownLink>
// 		</Link>
// 		<DropdownLink onClick={() => wallet.reset()}>
// 			Disconnect
// 		</DropdownLink>
// 	</DropdownContent>
// </Dropdown>
