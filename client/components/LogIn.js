import React from 'react';
import { graphql } from 'react-apollo';
import AuthForm from './AuthForm';
import loginMutation from '../queries/login';

const LogIn = ({ mutate }) =>
    <div>
        <h3>Login</h3>
        <AuthForm mutate={mutate} />
    </div>

export default graphql(loginMutation)(LogIn);