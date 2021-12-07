import React , { useContext } from 'react'
import { Container } from 'react-bootstrap'
import AuthContext from '../context/auth/auth'
import hero from '../images/hero.jpg'

export interface IStartPageProps {}
const StartPage:React.FunctionComponent<IStartPageProps> = (props) => {
	return (
		<div className = 'd-flex align-items-center' style = {{ minHeight: '90vh' }}>
			<Container >
				<div className = 'd-lg-flex'>
					<div className = 'd-flex justify-content-center'>
						<img src = { hero } className = 'img-fluid' style = {{ maxWidth: '450px', minWidth: '150px' }} />
					</div>
					<div className = 'my-auto'>
						<h1>Lorem ipsum</h1>
						<p style = {{ textAlign: 'justify', textIndent: '50px' }}>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
						</p>
						<a href = '#'>Read more..</a>
					</div>
				</div>
			</Container>
		</div>
	)
}
export default StartPage