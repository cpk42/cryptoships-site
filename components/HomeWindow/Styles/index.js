import styled from 'styled-components'

export const WelcomeWrapper = styled.div`
	height: 100vh;
	width: 100vw;

	display: flex;
	justify-content: center;
	align-items: center;

	background: ${({ theme }) => theme.colors.darkestPurp};
`

export const WordsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

export const WelcomeTitle = styled.h1`
	font-size: 64px;
	color: ${({ theme }) => theme.colors.lightBlue};
`

export const LeaderBoardWrapper = styled.div`
	height: 100vh;
	width: 100vw;
	padding-bottom: 5vh;

	/* padding-top: 8vh; */

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	/* background: ${({ theme }) => theme.colors.darkestPurp}; */
	background: url('/images/TravelMoment005.gif');
	background-repeat: no-repeat;
	background-size: cover;
`

// export const LbTopSection = styled.div`
// 	height: 20vh;
// 	width: 70vw;

// 	padding: 0 10%;

// 	display: flex;
// 	justify-content: center;
// 	align-items: center;

// 	margin-top: -10vh;
// 	margin-bottom: 5vh;

// 	background: ${({ theme }) => theme.colors.lightBlue};
// `

export const LbWrapper = styled.div`
	width: 90vw;
	height: 60vh;
	/* overflow-y: scroll; */
	/* z-index: 999; */

	display: flex;
	/* justify-content: center; */
	align-items: center;
	flex-direction: column;

	padding: 0 30px 30px 30px;
	border-radius: 10px;
	background: ${({ theme }) => theme.colors.blue};

	@media (min-width: ${({ theme }) => theme.device.laptop}) {
		width: 50vw;
	}
`

export const LbTitleWrapper = styled.div`
	width: 70%;
	height: 10vh;
	display: flex;
	align-items: center;
	justify-content: center;
`

export const LbTitle = styled.h1`
	margin: 0;
	color: ${({ theme }) => theme.colors.white};
	text-align: center;
	letter-spacing: 7px;
	font-size: 24px;
	@media (min-width: ${({ theme }) => theme.device.tablet}) {
		font-size: 36px;
	}
	@media (min-width: ${({ theme }) => theme.device.laptopL}) {
		font-size: 48px;
	}
`

export const InnerLbWrapper = styled.div`
	border: 1px solid black;
	height: 100%;
	width: 90%;
	overflow-y: scroll;

	display: flex;
	justify-content: center;
	flex-wrap: wrap;

	border-radius: 10px;

	&:nth-last-child() {
		border-bottom: none !important;
	}
`

export const LbCardWrapper = styled.div`
	/* border-radius: 7px; */
	border-bottom: 1px solid black;
	width: 100%;
	height: 10%;
	padding: 2rem;
	overflow: hidden;

	display: flex;
	justify-content: space-between;
	align-items: center;

	&:hover {
		background: ${({ theme }) => theme.colors.lightBlue};
	}
`
