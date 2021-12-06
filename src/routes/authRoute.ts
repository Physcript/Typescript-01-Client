import { IRoute } from '../interfaces/route'
import StartPage from '../pages/StartPage'
import HomePage from '../pages/HomePage'
import RegisterPage from '../pages/RegisterPage'
import LoginPage from '../pages/LoginPage'



const mainRoute: IRoute[] = [
	{
		path: '/',
		element: StartPage
	},
	{
		path: '/home',
		element: HomePage
	}
]

const authenticateRoute: IRoute[] = [
	{
		path: '/register',
		element: RegisterPage
	},
	{
		path: '/login',
		element: LoginPage
	}
]



const router = [ ...mainRoute,...authenticateRoute ]

export default router