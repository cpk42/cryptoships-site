import React from 'react'

import { Overlay } from './BurgerMenuStyles'
import Login from '../Login'
import NavLinks from '../NavLinks'

const Menu = ({ open, setOpen }) => {
	return (
		<Overlay open={open}>
			<NavLinks open={open} setOpen={setOpen} />
			<Login />
		</Overlay>
	)
}
export default Menu
