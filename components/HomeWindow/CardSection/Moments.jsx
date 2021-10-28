import React, { useState, useEffect } from 'react'
// import { useQuery } from '@apollo/client'
import { useWallet } from 'use-wallet'
import Card from './Card'

const Moments = () => {
	const wallet = useWallet()

	const [isLoading, setIsLoading] = useState()
	const [isError, setIsError] = useState()
	// let Moments = []

	// const { loading, error, data } = useQuery(GET_ALL_Moments, {
	// 	variables: {
	// 		takerAddress: wallet.account,
	// 	},
	// })

	// useEffect(() => {
	// 	if (data) {
	// 		setIsLoading(loading)
	// 		setIsError(error)
	// 	}
	// }, [loading, error])

	// if (data) offers = data.offers
	var Cards = []
	for (var i = 0; i < 20; i++) {
		Cards.push(
			<Card
				key={i}
				title={'Travel Moment'}
				image={'/images/TravelMoment005.gif'}
			/>
		)
	}

	return <>{Cards}</>
}

export default Moments
