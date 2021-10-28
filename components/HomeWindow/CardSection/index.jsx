import React, { useState, useEffect } from 'react'
// import useIsLoggedIn from '../../hooks/useIsLoggedIn'

import {
	CardSectionWrapper,
	ShipTab,
	AstroTab,
	MomentTab,
	TabNav,
	CardList,
} from './CardSectionStyles'
import Ships from './Ships'
import Astros from './Astros'
import Moments from './Moments'

const tabs = {
	ships: <Ships />,
	astros: <Astros />,
	moments: <Moments />,
}

const CardSection = () => {
	// const isLoggedIn = useIsLoggedIn()
	const [selectedTab, setSelectedTab] = useState('ships')
	// const [isActive, setIsActive] = useState({'ships'})

	const handleShipsClick = () => {
		setSelectedTab('ships')
	}
	const handleAstrosClick = () => {
		setSelectedTab('astros')
	}
	const handleMomentsClick = () => {
		setSelectedTab('moments')
	}

	return (
		<CardSectionWrapper>
			<TabNav>
				<ShipTab onClick={handleShipsClick} isActive={selectedTab}>
					Ships
				</ShipTab>
				<AstroTab onClick={handleAstrosClick} isActive={selectedTab}>
					Astronauts
				</AstroTab>
				<MomentTab onClick={handleMomentsClick} isActive={selectedTab}>
					Travel Moments
				</MomentTab>
			</TabNav>
			<CardList>{tabs[selectedTab]}</CardList>
		</CardSectionWrapper>
	)
}

export default CardSection
