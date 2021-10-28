import Link from 'next/link'
import styled from 'styled-components'
import Blockies from 'react-blockies'

// NavBar Container
export const HeaderWrapper = styled.nav`
	width: 100vw;
	/* height: 12vh !important; */
	height: ${(props) =>
		props.isScrolled ? '8vh !important' : '12vh !important'};

	transition: height 1s;
	background: ${({ theme, isScrolled }) =>
		!isScrolled ? 'none' : theme.colors.darkPurp};
	top: 0;
	z-index: 2;

	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 4vw 0 4vw;
	/* box-shadow: ${(props) =>
		props.isScrolled ? '' : '0 5px 20px black'}; */
	position: fixed;
`

// Title
export const TitleLogo = styled.a`
	font-family: ${({ theme }) => theme.fonts.raleway};
	color: ${({ theme }) => theme.colors.blue};
	cursor: pointer;
	font-size: 32px;
	line-height: 32px;
	letter-spacing: 7px;
	z-index: 100;
	font-weight: 900;

	@media (min-width: ${({ theme }) => theme.device.laptop}) {
		font-size: 40px;
		line-height: 40px;
	}
	@media (min-width: ${({ theme }) => theme.device.laptopL}) {
		font-size: 56px;
		line-height: 56px;
		margin-right: 3vw;
	}
`

export const TitleAndLinkFlex = styled.div`
	display: flex;
	align-items: center;
`

// Links

export const StyledNavLinkList = styled.ul`
	padding: 0;
	list-style: none;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	flex-direction: column;

	height: 100%;
	width: 100%;
	@media (min-width: ${({ theme }) => theme.device.tablet}) {
		flex-direction: row;
	}
`

export const NavLink = styled.a`
	cursor: pointer;
	color: ${({ theme }) => theme.colors.white};
	font-family: ${({ theme }) => theme.fonts.montserrat};

	text-transform: uppercase;
	font-weight: bold;
	letter-spacing: 4px;

	text-decoration: none;
	padding: 0;

	margin: 2vh 1vw;
	font-size: 12px;

	@media (min-width: ${({ theme }) => theme.device.laptop}) {
		font-size: 16px;
		margin: 0 2vw;
	}

	@media (min-width: ${({ theme }) => theme.device.laptopL}) {
		font-size: 16px;
	}
`

// Login Button

export const LoginWrapper = styled.div`
	/* background: ${({ theme }) => theme.colors.blue}; */

	border-radius: 10px;
	cursor: pointer;
	overflow: hidden;
	height: 5vh;
	padding: 0 2.5vw;

	display: flex;
	justify-content: center;
	align-items: center;

	width: 75vw;
	@media (min-width: ${({ theme }) => theme.device.tablet}) {
		width: auto;
	}
`

export const Fox = styled.img`
	height: 4vh;
	width: 4vh;

	margin-right: 10vw;
	@media (min-width: ${({ theme }) => theme.device.tablet}) {
		margin-right: 10px;
	}
`

export const LoginText = styled.h2`
	cursor: pointer;
	color: ${({ theme }) => theme.colors.white};
	font-family: Arial;
	margin: 0 !important;

	text-transform: uppercase;
	font-weight: 300;
	letter-spacing: 4px;

	text-decoration: none;

	font-size: 12px;

	@media (min-width: ${({ theme }) => theme.device.laptop}) {
		font-size: 16px;
	}

	@media (min-width: ${({ theme }) => theme.device.laptopL}) {
		font-size: 16px;
	}

	&:hover {
		font-weight: bolder;
	}
`

// Logged In Button

export const LoggedInWrapper = styled.div`
	cursor: pointer;
	overflow: hidden;
	height: 5vh;
	/* width: 20vw; */
	border-radius: 7px;
	/* background: ${({ theme }) => theme.colors.blue}; */
	/* padding: 0 0.25vw 0 0.5vw; */
	display: flex;
	justify-content: center;
	align-items: center;

	width: 75vw;
	@media (min-width: ${({ theme }) => theme.device.tablet}) {
		width: auto;
	}
`

export const Avatar = styled(Blockies)`
	height: 100% !important;
	width: auto !important;
	border-radius: 100%;
	border: solid 2px;
	border-color: ${({ theme }) => theme.colors.blue};

	margin-left: 20px;
`

export const AddressText = styled.h2`
	font-family: ${({ theme }) => theme.fonts.montserrat};
	color: ${({ theme }) => theme.colors.white};
	margin: 0;
	white-space: nowrap;
	/* overflow: hidden; */
	font-size: 12px;
	@media (min-width: ${({ theme }) => theme.device.laptopL}) {
		font-size: 16px;
	}
`

export const DropdownContent = styled.div`
	display: none;
	position: absolute;

	width: 100%;
	box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
	border-radius: 0 0 7px 7px;
	z-index: 1;
	&:nth-last-child() {
		border-radius: 0 0 7px 7px;
		cursor: pointer;
	}
`
export const Dropdown = styled.div`
	position: relative;
	display: inline-block;
	&:hover ${DropdownContent} {
		display: block;
	}
`

export const DropdownLink = styled.button`
	cursor: pointer;
	display: block;
	width: 100%;
	background-color: ${({ theme }) => theme.colors.secondaryGray};
	font-family: ${({ theme }) => theme.fonts.montserrat};
	color: ${({ theme }) => theme.colors.white};
	text-align: center;
	text-decoration: none;
	border: none;
	padding: 14px 16px;

	&:hover {
		background-color: ${({ theme }) => theme.colors.primaryGray};
	}
`
