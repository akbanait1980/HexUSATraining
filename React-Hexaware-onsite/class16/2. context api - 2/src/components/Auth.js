import React from 'react';
import Login from './Login';
import Home from './Home';
import { useUserContext } from '../context/UserContext';

const Auth = () => {
    const { user } = useUserContext()

    return(
        <>
            { user.isGuestUser ? <Login />  :  <Home /> }
        </>
    )
}
export default Auth;