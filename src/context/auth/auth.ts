

import { createContext } from 'react'

import { InitialAuthState,IAuthContext,iContextState } from '../../interfaces/authContext'

const AuthContext = createContext<iContextState>({
	authState: InitialAuthState,
	authDispatch: () => {}
})


export const AuthContextProvider = AuthContext.Provider
export const AuthContextConsumer = AuthContext.Consumer
export default AuthContext