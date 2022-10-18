import React from 'react';
import { graphql, compose } from 'react-apollo';
import AuthForm from './AuthForm';
import fetchCurrentUser from '../queries/fetchCurrentUser';
import signupMutation from '../queries/signup';

const SignUp = ({ mutate, data: { user } }) =>
    <div>
        <h3>Sign up</h3>
        <AuthForm mutate={mutate} user={user} />
    </div>

export default compose(
    graphql(fetchCurrentUser),
    graphql(signupMutation)
)(SignUp);