import React from 'react';
import { graphql } from 'react-apollo';
import fetchCurrentUser from '../queries/fetchCurrentUser';

const Dashboard = ({ data: { user } }) => {
    return (
        <div>
            {user &&
                <h5>Hello, {user.email}!</h5>
            }
        </div>
    )
}

export default graphql(fetchCurrentUser)(Dashboard);