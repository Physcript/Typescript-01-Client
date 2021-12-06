import React , { useContext } from 'react'
import AuthContext from '../context/auth/auth'

export interface IStartPageProps {}
const StartPage:React.FunctionComponent<IStartPageProps> = (props) => {
	const authContext = useContext(AuthContext)


	const su = {
		firstName: "john",
		lastName: "batino",
		email: "jasdj123@yahoo.com",
		verified: false,
		createdAt: new Date().toISOString(),
		updatedAt: new Date().toISOString()
	}

	const testHanlder = (e:React.MouseEvent) => {
		e.preventDefault()
		authContext.authDispatch({ type: 'LOGIN', payload: su, token: 'asdasdasda' })
	}


	return (
		<div>
			Start pages
			<div>
				<button onClick = { testHanlder } >Login</button>
			</div>
		</div>
	)
}
export default StartPage