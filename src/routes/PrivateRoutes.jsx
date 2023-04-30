import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    console.log('user in private route',user);
    if(loading){
        return <Spinner animation="border" variant="primary" />;
    }
    if(user){
        return children;
    }

    return <Navigate  state={{from: location}} to='/login'></Navigate>;
};

export default PrivateRoutes;

/**
 * --------------------------
 *      STEP
 * --------------------------
 * 1. user login or not 
 * 2. if user is login ,then allow them to visite route
 * 3. Else redirect to the user login page
 * 4. set up the private router
 * 5. handle loading
 */
 