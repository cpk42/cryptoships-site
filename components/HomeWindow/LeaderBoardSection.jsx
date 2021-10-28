import { LeaderBoardWrapper, LbTopSection, ShipsBanner } from './Styles'
import { DefaultText } from '../../global/globalStyles/Text'
import Leaderboard from './LeaderBoard'

const LeaderBoardSection = () => (
	<LeaderBoardWrapper>
		{/* <ShipsBanner src='/images/low_qual_trvl_mmt_1500x500.jpeg' /> */}
		{/* <ShipsBanner src='/images/TravelMoment005.gif' /> */}

		{/* <LbTopSection>
			<DefaultText>
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry's standard dummy
				text ever since the 1500s, when an unknown printer took a galley
				of type and scrambled it to make a type specimen book
			</DefaultText>
		</LbTopSection> */}

		<Leaderboard />
		{/* needs seperate component */}
	</LeaderBoardWrapper>
)

export default LeaderBoardSection
