import React from 'react'
import { DefaultText } from '../../global/globalStyles/Text'
import {
	InnerLbWrapper,
	LbCardWrapper,
	LbTitle,
	LbTitleWrapper,
	LbWrapper,
} from './Styles'

const Leaderboard = () => {
	console.log()
	// stopping my autoformatter from fucking with me
	return (
		<LbWrapper>
			<LbTitleWrapper>
				<LbTitle>Leaderboard</LbTitle>
			</LbTitleWrapper>

			<InnerLbWrapper>
				{/* Will replace this soup with a mapping function when data gets pulled */}
				<LbCardWrapper>
					<DefaultText>rafto</DefaultText>
					<DefaultText>Fleetscore: 10</DefaultText>
					<DefaultText>
						1 Ship | 4 Astros | 3 Travel Moments
					</DefaultText>
				</LbCardWrapper>
				<LbCardWrapper>
					<DefaultText>rafto</DefaultText>
					<DefaultText>Fleetscore: 10</DefaultText>
					<DefaultText>
						1 Ship | 4 Astros | 3 Travel Moments
					</DefaultText>
				</LbCardWrapper>
				<LbCardWrapper>
					<DefaultText>rafto</DefaultText>
					<DefaultText>Fleetscore: 10</DefaultText>
					<DefaultText>
						1 Ship | 4 Astros | 3 Travel Moments
					</DefaultText>
				</LbCardWrapper>
				<LbCardWrapper>
					<DefaultText>rafto</DefaultText>
					<DefaultText>Fleetscore: 10</DefaultText>
					<DefaultText>
						1 Ship | 4 Astros | 3 Travel Moments
					</DefaultText>
				</LbCardWrapper>
				<LbCardWrapper>
					<DefaultText>rafto</DefaultText>
					<DefaultText>Fleetscore: 10</DefaultText>
					<DefaultText>
						1 Ship | 4 Astros | 3 Travel Moments
					</DefaultText>
				</LbCardWrapper>
				<LbCardWrapper>
					<DefaultText>rafto</DefaultText>
					<DefaultText>Fleetscore: 10</DefaultText>
					<DefaultText>
						1 Ship | 4 Astros | 3 Travel Moments
					</DefaultText>
				</LbCardWrapper>
				<LbCardWrapper>
					<DefaultText>rafto</DefaultText>
					<DefaultText>Fleetscore: 10</DefaultText>
					<DefaultText>
						1 Ship | 4 Astros | 3 Travel Moments
					</DefaultText>
				</LbCardWrapper>
			</InnerLbWrapper>
		</LbWrapper>
	)
}

export default Leaderboard
