import React , { useContext, useEffect } from 'react'
import authContext from '../context/auth/auth'
import { Container,Row,Col,Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../context/auth/auth'
import hero from '../images/hero.jpg'
import test from '../images/test.jpg'
import test2 from '../images/test2.jpg'
import test3 from '../images/test3.jpg'
import test4 from '../images/test4.jpg'


export interface IStartPageProps {}
const StartPage:React.FunctionComponent<IStartPageProps> = (props) => {

	const AuthContext = useContext(authContext)
	const Navi = useNavigate()

	if(AuthContext.authState.AUTH) {
		Navi('/home')
	}
	

	return (
		<div>
			<div className = 'd-flex align-items-center m-3' style = {{ minHeight: '90vh' }}>
				<Container >
					<div className = 'd-lg-flex gap-3' >
						<div className = 'd-flex justify-content-center'>
							<img src = { hero } className = 'img-fluid' style = {{ maxWidth: '450px', minWidth: '100px' }} />
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
			<div className = 'bg-dark text-white d-flex align-items-center pt-5' style = {{ minHeight: '100vh' }}>
				<Container>
					<h1>What we offer</h1>
					<div className = 'd-lg-flex gap-3'>
						<Card style = {{ maxWidth:'540px' }} className = 'mt-3 text-black p-2'>
							<Row>
								<Col className = 'col-md-4 my-auto'>
									<img src = { test } className = 'img-fluid' />
								</Col>
								<Col className = 'col-md-8'>
									<div className ='card-body d-flex flex-column h-100 justify-content-center'>
										<h5 className = 'card-title'>Floral Ring</h5>
										<p className = 'card-text'>Lorem if sum dummy text of the printing and typesetting industry.</p>
										<a href = "#">Read more... </a>
									</div>
								</Col>
							</Row>
						</Card>
						<Card style = {{ maxWidth:'540px'}} className = 'mt-3 text-black p-2'>
							<Row>
								<Col className = 'col-md-4 my-auto'>
									<img src = { test2 } className = 'img-fluid' />
								</Col>
								<Col className = 'col-md-8'>
									<div className ='card-body d-flex flex-column h-100 justify-content-center'>
										<h5 className = 'card-title'>Floral Ring</h5>
										<p className = 'card-text'>Lorem if sum dummy text of the printing and typesetting industry.</p>
										<a href = "#">Read more... </a>
									</div>
								</Col>
							</Row>
						</Card>
					</div>
					<div className = 'd-lg-flex gap-3'>
						<Card style = {{ maxWidth:'540px' }} className = 'mt-3 text-black p-2'>
							<Row>
								<Col className = 'col-md-4 my-auto'>
									<img src = { test3 } className = 'img-fluid' />
								</Col>
								<Col className = 'col-md-8'>
									<div className ='card-body d-flex flex-column h-100 justify-content-center'>
										<h5 className = 'card-title'>Floral Ring</h5>
										<p className = 'card-text'>Lorem if sum dummy text of the printing and typesetting industry.</p>
										<a href = "#">Read more... </a>
									</div>
								</Col>
							</Row>
						</Card>
						<Card style = {{ maxWidth:'540px'}} className = 'mt-3 text-black p-2'>
							<Row>
								<Col className = 'col-md-4 my-auto'>
									<img src = { test4 } className = 'img-fluid' />
								</Col>
								<Col className = 'col-md-8'>
									<div className ='card-body d-flex flex-column h-100 justify-content-center'>
										<h5 className = 'card-title'>Floral Ring</h5>
										<p className = 'card-text'>Lorem if sum dummy text of the printing and typesetting industry.</p>
										<a href = "#">Read more... </a>
									</div>
								</Col>
							</Row>
						</Card>
					</div>
				</Container>
			</div>
			<div className = 'd-flex align-items-center' style = {{ minHeight: '100vh' }}>
					<Container>

						<h1>Lorem ipsum</h1>
							<p style = {{ textAlign: 'justify', textIndent: '50px' }}>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
							</p>
						<button className = 'btn-dark'> Buy Now </button>

					</Container>
		
			</div>

			<div className = 'bg-dark text-white d-flex align-items-center justify-content-center pt-5' style = {{ height: '40vh' }}>
				<div className = 'd-md-flex gap-3'>
					<div>
						<ul>
							<li>Home</li>
							<li>About</li>
							<li>Product</li>
							<li>Pricing</li>
							<li>Contact</li>
						</ul>
					</div>
					</div>

						<ul>
							<li>Flower Scent</li>
							<li>Red Beans</li>
							<li>Floral Petals</li>
							<li>Mischa</li>
							<li>Nayako</li>
						</ul>
					</div>
				<div>
			</div>	
			<div className = 'bg-dark text-white'>
				<Container>
					<label>All right reserv 2011 @philippines physcript@gmail.com </label>
				</Container>
			</div>
		</div>
	)
}
export default StartPage