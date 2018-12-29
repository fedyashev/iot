import React from 'react';

const DeviceDelete = props => {
    const {device, onDeleteDevice} = props;
    const onClickDeleteDevice = isSubmit => e => {
        e.preventDefault();
        onDeleteDevice(device._id, isSubmit);
    };
    return (
        <div className="border p-5">
            <div className="mb-5">
                <p className="h3 text-center">{`Delete device ${device.name}?`}</p>
            </div>
            <div className="d-flex justify-content-between">
                <div className="ml-5">
                    <button className="btn btn-success" onClick={onClickDeleteDevice(true)}>Yes</button>
                </div>
                <div className="mr-5">
                    <button className="btn btn-danger" onClick={onClickDeleteDevice(false)}>No</button>
                </div>
            </div>
        </div>
    );
};

export default DeviceDelete;