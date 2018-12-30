import React from 'react';
import {Link} from 'react-router-dom';


const CreateDeviceForm = props => {
    const {onCreateNewDevice} = props;
    let name;
    const onClickCreateNewDevice = e => {
        e.preventDefault();
        onCreateNewDevice(name.value);
        name.value = "";
    };
    return (
        <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="New device name" aria-label="New device name" aria-describedby="btnCreateNewDevice" ref={ref => name = ref}/>
            <div className="input-group-append">
                <button className="btn btn-success" type="button" id="btnCreateNewDevice" onClick={onClickCreateNewDevice}>Create</button>
            </div>
        </div>
    );
}

const DeviceTableRow = props => {
    const {device} = props;
    return(
        <tr>
            <td className="text-center">
                <Link to={`/device/${device._id}`}>{device.name}</Link>
            </td>
            <td className="text-center">{device.sensors.length}</td>
            <td className="text-center">
                <div className="dropdown ml-auto">
                    <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id={`dropdownMenu-device-${device._id}`} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Action
                    </button>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby={`dropdownMenu-device-${device._id}`}>
                        <Link to={`/device/${device._id}/createSensor`} className="dropdown-item">Add sensor</Link>
                        <Link to={`/device/${device._id}/renameDevice`} className="dropdown-item">Rename</Link>                        
                        <Link to={`/device/${device._id}/deleteDevice`} className="dropdown-item">Delete</Link>
                    </div>
                </div>
            </td>
        </tr>
    );
};

const DeviceTable = props => {
    const {user} = props;
    return (
        <table className="table table-bordered table-hover table-sm">
            <thead className="thead-dark">
                <tr>
                    <th scope="col" className="text-center">Device</th>
                    <th scope="col" className="text-center">Sensors</th>
                    <th scope="col" className="text-center">Action</th>
                </tr>
            </thead>
            <tbody style={{fontSize: '0.85rem'}}>
                {
                    user && user.devices && user.devices.map(
                        device => <DeviceTableRow key={device._id} device={device}/>
                    )
                }
            </tbody>
        </table>
    );
}

const DeviceList = props => {
    const {user, onCreateNewDevice} = props;
    return (
        <div>
            <CreateDeviceForm onCreateNewDevice={onCreateNewDevice}/>
            {
                user && <DeviceTable user={user}/>
            }
        </div>
    );
};

export default DeviceList;