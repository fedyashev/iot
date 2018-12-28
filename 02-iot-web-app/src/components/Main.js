import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Login from './Login';
import Registrate from './Registrate';
import User from './User';
import DeviceList from './DeviceList';
import Data from './Data';

const Main = props => {
    const {
        user,
        setErrorMessage,
        onLogin,
        onSubmitRegistrateForm,
        onCreateNewDevice
    } = props;
    //console.log(onCreateNewDevice);
    return (
        <main>
            <Switch>
                <Route path='/login' render={props => <Login {...props} onLogin={onLogin}/>}/>
                <Route path='/registrate' render={props =>
                    <Registrate {...props}
                        onSubmitRegistrateForm={onSubmitRegistrateForm}
                        setErrorMessage={setErrorMessage}/>
                }/>
                <Route exact path='/user' render={props => <User {...props} user={user}/>}/>
                <Route exact path='/device' render={props => <DeviceList {...props} user={user} onCreateNewDevice={onCreateNewDevice}/>}/>
                <Route exact path='/data' render={props => <Data {...props} user={user} />}/>
            </Switch>
        </main>
    );
};

export default Main;

