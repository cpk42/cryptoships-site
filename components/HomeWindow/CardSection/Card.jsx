import React, { useState } from 'react'
import {
	CardThumb,
	CardWrapper,
	CardTitle,
	CardOwner,
} from './CardSectionStyles'

const Card = ({ Card, title, handleClick }) => {
	return (
		<CardWrapper
		// key={Card.id}
		// onClick={handleClick ? () => handleClick(Card) : null}
		>
			<CardThumb
				// src={
				// 	Card.image_url || '/images/astro019.gif'
				// }
				src={'/images/astro019.gif'}
			/>
			{/* <CardTitle>{Card.name || Card.token_id}</CardTitle> */}
			<CardTitle>{`${title} #019`}</CardTitle>

			{/* <CardOwner>
				{Card.collection.name ||
					Card.creator.user.username ||
					'Unknown'}
			</CardOwner> */}
			<CardOwner>rafto</CardOwner>
		</CardWrapper>
	)
}

export default Card
