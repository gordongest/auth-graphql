import React from 'react';
import { hashHistory } from 'react-router';
import { graphql } from 'react-apollo';
import fetchCurrentUser from '../queries/fetchCurrentUser';

const requireAuth = WrappedComponent => {
    const Wrapper = ({ data: { loading, user } },...props) => {
        if (!loading && !user) {
            hashHistory.push('/login')
        }

        return <WrappedComponent {...props} />
    }

    return graphql(fetchCurrentUser)(Wrapper);
};

export default requireAuth;