

import React , { useState,useContext } from 'react'
import authContext from '../context/auth/auth'
import axios , {  } from 'axios'
import { useNavigate } from 'react-router-dom'

export interface ILoginProps {}

const Login: React.FunctionComponent<ILoginProps>  = (props) => {


	const AuthContext = useContext(authContext)
	const Navi = useNavigate()
	const [ loginForm,setLoginForm ] = useState({
		email: '',
		password: ''
	})
	const [ loginError,setLoginError ] = useState('')
	const [ loading,setLoading ] = useState(false)

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault()
		const { name,value } = e.target
		setLoginForm( (val) => ({
			...val,
			[name]: value
		}))
	}

	const loginHandler = (e: React.MouseEvent<HTMLElement>) => {
			e.preventDefault()
			setLoading(true)
			axios.request({
				url: 'http://localhost:1337/api/login',
				method: 'POST',
				data: {
					email: loginForm.email,
					password: loginForm.password
				},

			})
			.then((res) => {
				setLoading(false)
				setLoginError('')
				const result = res.data.data
				AuthContext.authDispatch({type:'LOGIN', payload: result.user, token: result.token})
				setCookies(result.token)
				Navi('/home')
			})
			.catch((err) => {
				setLoginError(err.response.data.data)
				setLoading(false)
			})
	}


	const setCookies = (token: string) => {
		let date = new Date()
		date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000))
		const expires = "expires=" + date.toUTCString()
		document.cookie = `token=${token}; ${expires}`
	}

	return(
		<div>
			{ loading ? (
				<div className = 'spinner-border'>

				</div>
			) : (
				<div className = 'd-flex flex-column gap-2' >
					<label className = 'text-warning'>{ loginError }</label>
					<label>Login</label>
					<div className = 'd-flex flex-column gap-2'> 
						<input type = "text" placeholder = 'Email' name = 'email' onChange = { onChange } />
						<input type = "password" placeholder = 'Password' name = 'password' onChange = { onChange } />
					</div>	
					<div>	
						<button className = 'btn-dark' onClick = { loginHandler }>Login</button>
					</div>
				</div>
			)}
		</div>
	)
}

export default Login