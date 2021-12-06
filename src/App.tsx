import React, { useContext,useReducer } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { AuthContextProvider } from './context/auth/auth'
import routes from './routes/index'
import StartPage from './pages/StartPage'
import reducer from './context/auth/reducer'
import { InitialAuthState } from './interfaces/authContext'

import './App.css';

function App() {

  const [ authState,authDispatch ] = useReducer(reducer,InitialAuthState)
  const AuthContextValue = {
    authState,
    authDispatch
  }



  return (
    <AuthContextProvider value = { AuthContextValue }>
      <BrowserRouter>
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
