import React from 'react';

const DeviceRenameForm = props => {
    const {device, onRenameDevice} = props;
    let name;
    const onClickRenameDevice = e => {
        e.preventDefault();
        onRenameDevice(device._id, name.value);
    };
    return (
        <div>
            <p className="h3 text-center">{`Enter new device name`}</p>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="New device name" aria-label="New device name" aria-describedby="btnCreateNewDevice" ref={ref => name = ref} defaultValue={device.name}/>
                <div className="input-group-append">
                    <button className="btn btn-success" type="button" id="btnCreateNewDevice" onClick={onClickRenameDevice}>Rename</button>
                </div>
            </div>
        </div>
    );
};

const DeviceRename = props => {
    const {device, onRenameDevice} = props;
    return (
        <DeviceRenameForm device={device} onRenameDevice={onRenameDevice}/>
    );
};

export default DeviceRename;