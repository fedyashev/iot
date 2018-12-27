import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Login from './Login';
import Registrate from './Registrate';
import User from './User';

const Main = props => {
    const {onLogin, user, onSubmitRegistrateForm, setErrorMessage} = props;
    return (
        <main>
            <Switch>
                <Route path='/login' render={props => <Login {...props} onLogin={onLogin}/>}/>
                <Route path='/registrate' render={props =>
                    <Registrate {...props}
                        onSubmitRegistrateForm={onSubmitRegistrateForm}
                        setErrorMessage={setErrorMessage}/>
                }/>
                <Route path='/user' render={props => <User {...props} user={user}/>}/>
            </Switch>
        </main>
    );
};

export default Main;

