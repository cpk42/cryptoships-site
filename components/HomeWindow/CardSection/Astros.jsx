import React, { useState, useEffect } from 'react'
// import { useQuery } from '@apollo/client'
import { useWallet } from 'use-wallet'
import Card from './Card'

const Astros = () => {
	const wallet = useWallet()

	const [isLoading, setIsLoading] = useState()
	const [isError, setIsError] = useState()
	// let Astros = []

	// const { loading, error, data } = useQuery(GET_ALL_Astros, {
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
		Cards.push(<Card key={i} title={'Astronaut'} />)
	}

	return <>{Cards}</>
}

export default Astros
