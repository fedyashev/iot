import React from 'react';
import {Link} from 'react-router-dom';

const SensorNav = props => {
    const {device_id, sensor_id} = props.match.params;
    return (
        <nav className="nav mb-2">
            <Link to={`/device/${device_id}/sensor/${sensor_id}/editSensor`} className="nav-link">Edit</Link>
            <Link to={`/device/${device_id}/sensor/${sensor_id}/deleteSensor`} className="nav-link">Delete</Link>
        </nav>
    );
};

const SensorInfo = props => {
    const {sensor} = props;
    return (
        <div>
            <p className="h3 text-center mb-1">Sensor info</p>
            <ul className="list-group list-group-flush">
                <li className="list-group-item p-1">
                    <div className="row">
                        <div className="col-4 col-md-2 col-lg-2">sensor_id:</div>
                        <div className="col-8 col-md-10 col-lg-10">{sensor._id}</div>
                    </div>
                </li>
                <li className="list-group-item p-1">
                    <div className="row">
                        <div className="col-4 col-md-2 col-lg-2">name:</div>
                        <div className="col-8 col-md-10 col-lg-10">{sensor.name}</div>
                    </div>
                </li>
                <li className="list-group-item p-1">
                    <div className="row">
                        <div className="col-4 col-md-2 col-lg-2">units:</div>
                        <div className="col-8 col-md-10 col-lg-10">{sensor.units}</div>
                    </div>
                </li>
                <li className="list-group-item p-1">
                    <div className="row">
                        <div className="col-4 col-md-2 col-lg-2">date:</div>
                        <div className="col-8 col-md-10 col-lg-10">{sensor.lastData ? (new Date(sensor.lastData.date)).toLocaleString('en-US', {timeZone: 'Europe/Minsk', hour12: false}) : '---'}</div>
                    </div>
                </li>
                <li className="list-group-item p-1">
                    <div className="row">
                        <div className="col-4 col-md-2 col-lg-2">value:</div>
                        <div className="col-8 col-md-10 col-lg-10">{sensor.lastData ? sensor.lastData.value: '---'}</div>
                    </div>
                </li>
            </ul>
        </div>

    );
};

const Sensor = props => {
    return(
        <section>
            <SensorNav {...props}/>
            <SensorInfo {...props}/>
        </section>
    );
};

export default Sensor;