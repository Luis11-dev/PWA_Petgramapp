import React, { Fragment, useContext } from 'react';
import { SubmitButton } from '../components/SubmitButton';
import { Context } from '../Context';

export const User = () => {
    const {removeAuth} = useContext(Context);
    return (
        <Fragment>
            <h1>User</h1>
            <SubmitButton onClick={removeAuth}>Cerrar sesión</SubmitButton>
        </Fragment>
    )    
}