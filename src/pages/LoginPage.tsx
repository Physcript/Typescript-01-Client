import React from 'react'
import Login from '../components/Login'
export interface ILoginPageProps {}

const LoginPage: React.FunctionComponent<ILoginPageProps> = (props) => {
	return (
		<div className = 'd-flex align-items-center justify-content-center' style = {{ height: '90vh' }}>
			<Login />
		</div>
	)
}

export default LoginPage