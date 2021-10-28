import styled from 'styled-components'

export const CardSectionWrapper = styled.div`
	height: 100vh;
	width: 100vw;

	padding-top: 8vh;

	display: flex;
	flex-direction: column;
	align-items: center;
`

export const TabNav = styled.div`
	height: 25vh;
	width: 50vw;

	display: flex;
	align-items: center;
	justify-content: space-between;
`

// Super hacky cause i got lazy
export const ShipTab = styled.p`
	font-size: 24px;
	color: ${({ theme, isActive }) =>
		isActive == 'ships' ? theme.colors.white : theme.colors.primaryGray};
	cursor: pointer;
`

export const AstroTab = styled.p`
	font-size: 24px;
	color: ${({ theme, isActive }) =>
		isActive == 'astros' ? theme.colors.white : theme.colors.primaryGray};
	cursor: pointer;
`

export const MomentTab = styled.p`
	font-size: 24px;
	color: ${({ theme, isActive }) =>
		isActive == 'moments' ? theme.colors.white : theme.colors.primaryGray};
	cursor: pointer;
`

export const CardList = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 80%;
	height: auto;
	overflow-y: scroll;
	padding: 1em;
`

export const CardWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	cursor: pointer;
	flex: 1 0 500px;
	box-sizing: border-box;
	margin: 2rem 1em;
	/* overflow: hidden; */
	@media (min-width: ${({ theme }) => theme.device.mobileS}) {
		max-width: calc(100% - 2em);
	}
	@media (min-width: ${({ theme }) => theme.device.laptop}) {
		max-width: calc(50% - 2em);
	}
	@media (min-width: ${({ theme }) => theme.device.laptopL}) {
		max-width: calc(33% - 2em);
	}
	@media (min-width: ${({ theme }) => theme.device.desktop}) {
		max-width: calc(25% - 2em);
	}
`

export const CardThumb = styled.img`
	-webkit-filter: drop-shadow(0 0 1rem #111);
	filter: drop-shadow(0 0 1rem #111);
	width: 100%;
	height: auto;
	border-radius: 7px;
`

export const CardTitle = styled.h2`
	color: ${({ theme }) => theme.colors.white};
	letter-spacing: 3px;
	font-size: 24px;
	margin-bottom: 0.5rem;
	text-align: center;
`

export const CardOwner = styled.p`
	color: ${({ theme }) => theme.colors.white};
	font-variant-caps: all-small-caps;
	letter-spacing: 3px;
	font-size: 16px;
	margin: 0;
	text-align: center;
`
