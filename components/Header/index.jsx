import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import {
	HeaderWrapper,
	TitleLogo,
	TitleAndLinkFlex,
} from './Styles/HeaderStyles'
import Login from './Login'
import { DesktopBreakpoint, PhoneBreakpoint } from '../../global/MediaQueries'
import Burger from './BurgerMenu/Burger'
import Menu from './BurgerMenu/Menu'
import NavLinks from './NavLinks'

import { useWallet } from 'use-wallet'

const Header = () => {
	const [open, setOpen] = useState(false)
	let listener = null
	const [isScrolled, setIsScrolled] = useState(false)
	const wallet = useWallet()

	useEffect(() => {
		listener = document.addEventListener('scroll', (e) => {
			var scrolled = document.scrollingElement.scrollTop
			console.log(scrolled)
			if (scrolled >= 400) {
				if (!isScrolled) {
					setIsScrolled(true)
				}
			} else {
				if (isScrolled) {
					setIsScrolled(false)
				}
			}
		})
		return () => {
			document.removeEventListener('scroll', listener)
		}
	}, [isScrolled])

	// console.log(isScrolled)
	return (
		<HeaderWrapper isScrolled={isScrolled}>
			<PhoneBreakpoint>
				<Link href='/'>
					<TitleLogo>CryptoShips</TitleLogo>
				</Link>
				<Burger open={open} setOpen={setOpen} />
				<Menu open={open} setOpen={setOpen} />
			</PhoneBreakpoint>

			<DesktopBreakpoint>
				<TitleAndLinkFlex>
					<Link href='#Home'>
						<TitleLogo href='#Home'>CryptoShips</TitleLogo>
					</Link>
					<NavLinks />
				</TitleAndLinkFlex>
				<Login />
			</DesktopBreakpoint>
		</HeaderWrapper>
	)
}

export default Header
