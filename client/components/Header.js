import React from 'react';
import { Link } from 'react-router';
import { graphql, compose } from 'react-apollo';
import fetchCurrentUser from '../queries/fetchCurrentUser';
import logout from '../queries/logout';

const Header = ({ mutate, data: { user, loading } }) => {
    const handleLogout = e => {
        e.preventDefault();

        mutate({
            refetchQueries: [{ query: fetchCurrentUser }]
        });
    }

    const renderButtons = () => {
        if (loading) return <div />;

        return user ? (
            <div>
                <li onClick={handleLogout}>
                    <a>Log Out</a>
                </li>
            </div>
        ) : (
            <div>
                <li>
                    <Link to="/signup">Sign Up</Link>
                </li>
                <li>
                    <Link to="/login">Log In</Link>
                </li>
            </div>
        )
    }

    return (
        <nav>
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo left">
                    Home
                </Link>
                <ul className="right">
                    {renderButtons()}
                </ul>
            </div>
        </nav>
    )
}

export default compose(graphql(fetchCurrentUser), graphql(logout))(Header);