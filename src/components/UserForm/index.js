import React, { Fragment } from 'react';
import { useInputValue } from '../../hooks/useInputValue';
import { SubmitButton } from '../SubmitButton';
import { Error, Form, Input, Title } from './styles';



export const UserForm = ({ error, disabled, onSubmit, title }) => {

    const email = useInputValue('');
    const password = useInputValue('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({ email: email.value, password: password.value });
    }


    return (
        <Fragment>
            <Form onSubmit={handleSubmit} disabled={disabled}>
                <Title>{title}</Title>
                <Input disabled={disabled} placeholder='Email' {...email} />
                <Input disabled={disabled} placeholder='Password' type='password' {...password} />
                <SubmitButton disabled={disabled}>{title}</SubmitButton>
            </Form>
            {error && <Error>{error}</Error>}
        </Fragment>
    )
}

