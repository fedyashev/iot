import React from 'react';

const SensorDelete = props => {
    const {sensor, onDeleteSensor} = props;
    const device_id = props.match.params.device_id;
    const onClickDeleteSensor = isSubmit => e => {
        e.preventDefault();
        onDeleteSensor(device_id, sensor._id, isSubmit);
    };
    return (
        <div className="border p-5">
            <div className="mb-5">
                <p className="h3 text-center">{`Delete sensor ${sensor.name}?`}</p>
            </div>
            <div className="d-flex justify-content-between">
                <div className="ml-5">
                    <button className="btn btn-success" onClick={onClickDeleteSensor(true)}>Yes</button>
                </div>
                <div className="mr-5">
                    <button className="btn btn-danger" onClick={onClickDeleteSensor(false)}>No</button>
                </div>
            </div>
        </div>
    );
};

export default SensorDelete;