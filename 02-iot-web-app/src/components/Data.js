import React from 'react';
import PropTypes from 'prop-types';

const TableRow = props => {
    const {date, device, sensor, value, units} = props.data;
    return (
        <tr>
            <td>{(new Date(date)).toLocaleString('en-US', {timeZone: 'Europe/Minsk'})}</td>
            <td>{device}</td>
            <td>{sensor}</td>
            <td>{value}</td>
            <td>{units}</td>
        </tr>
    );
}

const Data = props => {
    const {user} = props;
    return(
        <table className="table table-bordered table-hover table-sm table-responsive-sm">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Device</th>
                    <th scope="col">Sensor</th>
                    <th scope="col">Value</th>
                    <th scope="col">Units</th>
                </tr>
            </thead>
            <tbody style={{fontSize: '0.85rem'}}>
                {
                    user && user.devices && user.devices.map(device => device.sensors.map(sensor => 
                        <TableRow key={sensor._id} data={
                            {
                                date: sensor.lastData.date,
                                device: device.name,
                                sensor: sensor.name,
                                value: sensor.lastData.value,
                                units: sensor.units
                            }
                        }/>
                    ))
                }
            </tbody>
        </table>
    );
};

Data.propTypes = {
    user: PropTypes.object
}

export default Data;