import React from 'react';
import {Link} from 'react-router-dom';

const DeviceNav = props => {
    const {device} = props;
    return (
        <nav className="nav mb-3">
            <Link to={`/device/${device._id}/createSensor`} className="nav-link">Add sensor</Link>
            <Link to={`/device/${device._id}/renameDevice`} className="nav-link">Rename</Link>
            <Link to={`/device/${device._id}/deleteDevice`} className="nav-link">Delete</Link>
        </nav>
    );
};

const DeviceInfo = props => {
    const {device} = props;
    return (
        <div className="mb-3">
            <p className="h3 text-center mb-1">Device info</p>
            <ul className="list-group list-group-flush">
                <li className="list-group-item p-1">
                    <div className="row">
                        <div className="col-4 col-md-2 col-lg-2">device_id:</div>
                        <div className="col-8 col-md-10 col-lg-10">{device._id}</div>
                    </div>
                </li>
                <li className="list-group-item p-1">
                    <div className="row">
                        <div className="col-4 col-md-2 col-lg-2">name:</div>
                        <div className="col-8 col-md-10 col-lg-10">{device.name}</div>
                    </div>
                </li>
            </ul>
        </div>
    );
};

const DeviceSensorsTable = props => {
    const {device, onRefreshSensorData, onRefreshDeviceData} = props;
    const onClickRefreshSensorData = (device_id, sensor_id) => e => {
        e.preventDefault();
        onRefreshSensorData(device_id, sensor_id);
    }
    const onClickRefreshDeviceData = e => {
        e.preventDefault();
        onRefreshDeviceData(device._id);
    }
    return (
        <div className="table-responsive">
            <p className="h3 text-center mb-1">Sensors list</p>
            <table className="table table-bordered table-hover table-sm">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col" className="text-center">
                            <button className="btn btn-sm btn-secondary p-2" onClick={onClickRefreshDeviceData}>{' '}</button>
                        </th>
                        <th scope="col" className="text-center">Name</th>
                        <th scope="col" className="text-center">Units</th>
                        <th scope="col" className="text-center">Value</th>
                        <th scope="col" className="text-center">Date</th>
                    </tr>
                </thead>
                <tbody style={{fontSize: '0.85rem'}}>
                    {
                        device && device.sensors.map(sensor => 
                            <tr key={sensor._id}>
                                <td className="text-center">
                                    <button className="btn btn-sm btn-secondary p-2" onClick={onClickRefreshSensorData(device._id, sensor._id)}>{' '}</button>
                                </td>
                                <td className="text-center">
                                    <Link to={`/device/${device._id}/sensor/${sensor._id}`}>{sensor.name}</Link>
                                </td>
                                <td className="text-center">{sensor.units}</td>
                                <td className="text-center">{sensor.lastData ? sensor.lastData.value : '---'}</td>
                                <td className="text-center">{sensor.lastData ? (new Date(sensor.lastData.date)).toLocaleString('en-US', {timeZone: 'Europe/Minsk', hour12: false}) : '---'}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

const Device = props => {
    return (
        <section>
            <DeviceNav {...props}/>
            <DeviceInfo {...props}/>
            <DeviceSensorsTable {...props}/>
        </section>
    );
};

export default Device;