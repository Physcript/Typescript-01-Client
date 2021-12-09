import React, { useContext,useReducer,useEffect } from 'react';
import { BrowserRouter,Routes,Route,useNavigate } from 'react-router-dom'
import { AuthContextProvider } from './context/auth/auth'
import routes from './routes/index'
import reducer from './context/auth/reducer'
import { InitialAuthState } from './interfaces/authContext'
import axios from 'axios'

import StartPage from './pages/StartPage'
import Headers from './components/Headers'

import './App.css';

function App() {

  const [ authState,authDispatch ] = useReducer(reducer,InitialAuthState)
  const AuthContextValue = {
    authState,
    authDispatch
  }


  useEffect(() => {
      const token = document.cookie.split('=')[1] || null
      if(token) {
        axios.get('http://localhost:1337/api/auth',
          {withCredentials: true})
        .then((res) => {
          const user = res.data.data.user
          authDispatch({type: 'LOGIN', payload: user, token: token })
        })
        .catch((err) => {
          document.cookie = 'token='
          authDispatch({type: 'LOGOUT'})
        })
      }
  },[])


  return (
    <AuthContextProvider value = { AuthContextValue }>
      <BrowserRouter>
        <Headers />
        <Routes>
          { routes.map( (val) => (
            <Route key = 'val.path' element = { <val.element /> } path = { val.path } />
          )) }
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
