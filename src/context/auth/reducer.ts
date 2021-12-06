import { IAuthContext } from '../../interfaces/authContext'
import { TReducer } from '../../interfaces/authReducer'


const reducer = (state: IAuthContext,action: TReducer): IAuthContext => {
	switch(action.type) {
		case 'LOGIN':
			return {
				...state,
				USER: action.payload,
				TOKEN: action.token
			}
		case 'LOGOUT':
			return {
				...state
			}
		default: 
			return {
				...state
			}
	}
}


export default reducer