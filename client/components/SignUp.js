import React from 'react';
import { graphql } from 'react-apollo';
import AuthForm from './AuthForm';
import signupMutation from '../queries/signup';

const SignUp = ({ mutate }) =>
    <div>
        <h3>Sign up</h3>
        <AuthForm mutate={mutate} />
    </div>

export default graphql(signupMutation)(SignUp);