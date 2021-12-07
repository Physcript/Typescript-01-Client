

import React from 'react'
import { Container,Navbar,Nav } from 'react-bootstrap'
export interface IHeaders {}


const Headers: React.FunctionComponent<IHeaders> = (props) => {
	return (
		<Navbar collapseOnSelect expand = 'lg' style = {{ height: '10vh' }}>
			<Container>
				<Navbar.Brand>RBoo</Navbar.Brand>
				<Navbar.Toggle aria-controls = 'responsive-navbar-nav' />
				<Navbar.Collapse id = 'responsive-navbar-nav'>
					<Nav className="ms-auto">
						<Nav.Link href = "#about">About</Nav.Link>
						<Nav.Link href = "#pricing">Login</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Headers