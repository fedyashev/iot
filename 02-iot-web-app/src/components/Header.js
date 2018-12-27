import React from 'react';

import {Link} from 'react-router-dom';

const Header = props => {
    const {user, onLogout} = props;

    const onClickLogout = e => {
        e.preventDefault();
        onLogout();
    };

    return (
        <header className="mb-3">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-bottom">
                <span className="navbar-brand">IoT</span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    {
                        user ?
                            (
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link className="nav-link" to='/logout' onClick={onClickLogout}>Logout</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to={`/user`}>{user.username}</Link>
                                    </li>
                                </ul>
                            ) :
                            (
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link className="nav-link" to='/login'>Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to='/registrate'>Registrate</Link>
                                    </li>
                                </ul>
                            )
                    }
                </div>
            </nav>
        </header>
    );
};

export default Header;