import React from 'react';
import PropTypes from 'prop-types';

import {Link} from 'react-router-dom';

const TableRow = props => {
    const {date, device, sensor, value, units} = props.data;
    return (
        <tr>
            <td className="text-center">
                <button className="btn btn-sm btn-secondary p-2">{' '}</button>
            </td>
            <td className="text-center">
                {date ? (new Date(date)).toLocaleString('en-US', {timeZone: 'Europe/Minsk', hour12: false}) : '---'}
            </td>
            <td className="text-center">
                <Link to={`/device/${device._id}`}>{device.name}</Link>
            </td>
            <td className="text-center">
                <Link to={`/device/${device._id}/sensor/${sensor._id}`}>{sensor.name}</Link>
            </td>
            <td className="text-center">
                {value || '---'}
            </td>
            <td className="text-center">{units}</td>
        </tr>
    );
}

const Data = props => {
    const {user} = props;
    return(
        <div className="table-responsive">
            <table className="table table-bordered table-hover table-sm">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col" className="text-center">
                            <button className="btn btn-sm btn-secondary p-2">{' '}</button>
                        </th>
                        <th scope="col" className="text-center">Date</th>
                        <th scope="col" className="text-center">Device</th>
                        <th scope="col" className="text-center">Sensor</th>
                        <th scope="col" className="text-center">Value</th>
                        <th scope="col" className="text-center">Units</th>
                    </tr>
                </thead>
                <tbody style={{fontSize: '0.85rem'}}>
                    {
                        user && user.devices && user.devices.map(device => device.sensors.map(sensor => 
                            <TableRow key={sensor._id} data={
                                {
                                    date: sensor.lastData ? sensor.lastData.date : null,
                                    device: device,
                                    sensor: sensor,
                                    value: sensor.lastData ? sensor.lastData.value : null,
                                    units: sensor.units
                                }
                            }/>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

Data.propTypes = {
    user: PropTypes.object
}

export default Data;