import React from 'react';
import Header from './Header';

const App = ({ children }) => {
    return (
        <div>
            <Header />
            Auth Starter
            {children}
        </div>
    )
}

export default App;