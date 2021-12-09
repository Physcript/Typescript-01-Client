
import { IUser } from './authContext'

interface IReducerLogin {
	type: 'LOGIN',
	payload: IUser
	token: string
}

interface IReducerLogout {
	type: 'LOGOUT'
}
interface IReducerToken {
	type: 'TOKEN',
	token: string
}

export type TReducer = IReducerLogin | IReducerLogout | IReducerToken