import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Login from './Login';
import Registrate from './Registrate';
import User from './User';

const Main = props => {
    const {onLogin, user} = props;
    return (
        <main>
            <Switch>
                <Route path='/login' exact render={props => <Login {...props} onLogin={onLogin}/>}/>
                <Route path='/registrate' exact component={Registrate}/>
                <Route path='/user' render={props => <User {...props} user={user}/>}/>
            </Switch>
        </main>
    );
};

export default Main;

