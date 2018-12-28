import React from 'react';

const DeviceListItem = props => {
    const {name, sensors} = props.device;
    return (
        <ul className="list-group mb-3">
            <li className="list-group-item list-group-item-dark">{name}</li>
            {
                sensors.length > 0 && sensors.map(sensor => <li key={sensor._id} className="list-group-item">{sensor.name}</li>)
            } 
        </ul>
    );
};

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

const DeviceList = props => {
    const {user, onCreateNewDevice} = props;
    return (
        <div>
            <CreateDeviceForm onCreateNewDevice={onCreateNewDevice}/>
            {
                user && user.devices ? 
                    user.devices.map(device => <DeviceListItem key={device._id} device={device}/>) :
                    <h1 className="h1 text-secondary text-center">Empty</h1>
            }
        </div>
    );
};

export default DeviceList;