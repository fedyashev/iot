import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Login from './Login';
import Registrate from './Registrate';

import User from './User';
import Data from './Data';

import Device from './Device';
import DeviceList from './DeviceList';
import DeviceDelete from './DeviceDelete';
import DeviceRename from './DeviceRename';

import Sensor from './Sensor';
import SensorCreate from './SensorCreate';
import SensorEdit from './SensorEdit';
import SensorDelete from './SensorDelete';

const Main = props => {
    const {
        user,
        setErrorMessage,
        onLogin,
        onSubmitRegistrateForm,
        onCreateNewDevice,
        onDeleteDevice,
        onCreateSensor,
        onRenameDevice,
        onEditSensor,
        onDeleteSensor,
        onRefreshAllData,
        onRefreshSensorData,
        onRefreshDeviceData
    } = props;
    return (
        <main>
            <Switch>
                <Route path='/login' render={props => <Login {...props} onLogin={onLogin}/>}/>
                <Route path='/registrate' render={props =>
                    <Registrate {...props}
                        onSubmitRegistrateForm={onSubmitRegistrateForm}
                        setErrorMessage={setErrorMessage}/>
                }/>
                <Route exact path='/data' render={props => <Data {...props} user={user} onRefreshAllData={onRefreshAllData} onRefreshSensorData={onRefreshSensorData}/>}/>
                <Route exact path='/user' render={props => <User {...props} user={user}/>}/>
                <Route exact path='/device' render={props => <DeviceList {...props} user={user} onCreateNewDevice={onCreateNewDevice}/>}/>
                <Route exact path='/device/:device_id' render={props => user && <Device {...props} device={user.devices.find(d => d._id === props.match.params.device_id)} onRefreshSensorData={onRefreshSensorData} onRefreshDeviceData={onRefreshDeviceData}/>}/>
                <Route exact path='/device/:device_id/createSensor' render={props => user && <SensorCreate {...props} onCreateSensor={onCreateSensor}/>}/>
                <Route exact path='/device/:device_id/deleteDevice' render={props => user && <DeviceDelete {...props} device={user.devices.find(d => d._id === props.match.params.device_id)} onDeleteDevice={onDeleteDevice}/>}/>
                <Route exact path='/device/:device_id/renameDevice' render={props => user && <DeviceRename {...props} device={user.devices.find(d => d._id === props.match.params.device_id)} onRenameDevice={onRenameDevice}/>}/>
                <Route exact path='/device/:device_id/sensor/:sensor_id' render={props => user &&
                    <Sensor {...props}
                        sensor={
                            user
                                .devices.find(d => d._id === props.match.params.device_id)
                                .sensors.find(s => s._id === props.match.params.sensor_id)
                        }
                        onRefreshSensorData={onRefreshSensorData}
                    />
                }/>
                <Route exact path='/device/:device_id/sensor/:sensor_id/editSensor' render={props => user &&
                    <SensorEdit {...props}
                        sensor={
                            user
                                .devices.find(d => d._id === props.match.params.device_id)
                                .sensors.find(s => s._id === props.match.params.sensor_id)
                        }
                        onEditSensor={onEditSensor}
                    />
                }/>
                <Route exact path='/device/:device_id/sensor/:sensor_id/deleteSensor' render={props => user &&
                    <SensorDelete {...props}
                        sensor={
                            user
                                .devices.find(d => d._id === props.match.params.device_id)
                                .sensors.find(s => s._id === props.match.params.sensor_id)
                        }
                        onDeleteSensor={onDeleteSensor}
                    />
                }/>
            </Switch>
        </main>
    );
};

export default Main;

