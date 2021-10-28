import React from 'react'
import MediaQuery from 'react-responsive'

const breakpoints = {
	desktop: '(min-width: 1025px)',
	// tablet: '(max-width: 1024px)',
	phone: '(max-width: 1024px)',
}

const Breakpoint = (props) => {
	const breakpoint = breakpoints[props.name] || breakpoints.desktop

	return (
		<MediaQuery {...props} query={breakpoint}>
			{props.children}
		</MediaQuery>
	)
}

export const DesktopBreakpoint = (props) => {
	return <Breakpoint name='desktop'>{props.children}</Breakpoint>
}

export const PhoneBreakpoint = (props) => {
	return <Breakpoint name='phone'>{props.children}</Breakpoint>
}

// export const TabletBreakpoint = (props) => {
// 	return <Breakpoint name='tablet'>{props.children}</Breakpoint>
// }
