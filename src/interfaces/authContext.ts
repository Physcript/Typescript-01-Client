
import { TReducer } from './authReducer'

export interface IAuthContext {
	USER: IUser | null,
	TOKEN: string | null,
	AUTH: boolean
}


export interface IUser{
	firstName: string,
	lastName: string,
	email: string,
	verified: boolean,
	createdAt: string,
	updatedAt: string
}


export interface iContextState {
	authState:  IAuthContext,
	authDispatch: React.Dispatch<TReducer>
}

export const InitialAuthState: IAuthContext = {
	USER: null,
	TOKEN: null,
	AUTH: false
}
