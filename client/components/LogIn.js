import React from 'react';
import { graphql, compose } from 'react-apollo';
import AuthForm from './AuthForm';
import fetchCurrentUser from '../queries/fetchCurrentUser';
import loginMutation from '../queries/login';

const LogIn = ({ mutate, data: { user } }) =>
    <div>
        <h3>Login</h3>
        <AuthForm mutate={mutate} user={user} />
    </div>

export default compose(
    graphql(fetchCurrentUser),
    graphql(loginMutation)
)(LogIn);