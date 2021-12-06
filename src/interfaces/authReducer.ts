
import { IUser } from './authContext'

interface IReducerLogin {
	type: 'LOGIN',
	payload: IUser
	token: string
}

interface IReducerLogout {
	type: 'LOGOUT'
}

export type TReducer = IReducerLogin | IReducerLogout