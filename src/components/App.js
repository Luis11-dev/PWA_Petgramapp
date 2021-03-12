import React, { Suspense, useContext } from 'react';
import { Redirect, Router } from '@reach/router'
import { Home } from '../pages/Home';
import { GlobalStyle } from '../styles/GlobalStyles';
import Logo from './Logo';
import { Detail } from '../pages/Detail';
import { NavBar } from './NavBar';
/* import { Favs } from '../pages/Favs'; */
const Favs = React.lazy(() => import('../pages/Favs'));
import { User } from '../pages/User';
import { NotRegisteredUSer } from '../pages/NotRegisteredUser';
import {Context} from '../Context';
import { NotFound } from '../pages/NotFound';

/* const UserLogged = ( { children } ) => {
    return children( {isAuth: true});
} */

export const App = () => {

    /* const urlParams = new window.URLSearchParams(window.location.search);
    const detaildID = urlParams.get('detail'); */
    /* console.log(detaildID); */

    const { isAuth } = useContext(Context);

    return (
        <Suspense fallback={<div />}>
            <GlobalStyle />
            <Logo />
            <Router>
                <NotFound default />
                <Home path='/' />
                <Home path='/pet/:id' />
                <Detail path='/detail/:detailId' />
                {!isAuth && <NotRegisteredUSer path='/login' />}
                {!isAuth && <Redirect noThrow from='/favs' to='/login' />}
                {!isAuth && <Redirect noThrow from='/user' to='/login' />}
                {isAuth && <Redirect noThrow from='/login' to='/' />}
                <Favs path='/favs' />
                <User path='/user' />
            </Router>
            <NavBar />
        </Suspense>
    )
}


