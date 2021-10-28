import { WelcomeWrapper, WelcomeTitle, WordsWrapper } from './Styles'
import { CallToActionText } from '../../global/globalStyles/Text'

const WelcomeSection = () => (
	<WelcomeWrapper>
		<WordsWrapper>
			<WelcomeTitle>CryptoShips</WelcomeTitle>
			<CallToActionText>
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry's standard dummy
				text ever since the 1500s, when an unknown printer took a galley
				of type and scrambled it to make a type specimen book
			</CallToActionText>
		</WordsWrapper>
	</WelcomeWrapper>
)

export default WelcomeSection
