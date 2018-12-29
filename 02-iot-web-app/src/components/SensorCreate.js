import React from 'react';

const CreateSensorForm = props => {
    const {onCreateSensor, device_id} = props;
    const onClickCreateSensor = e => {
        e.preventDefault();
        onCreateSensor(device_id, name.value, units.value);
    };
    let name, units;
    return (
        <div className="mb-2">
            <div className="text-center">
                <span className="h4">Create a new sensor</span>
            </div>
            <div className="input-group ">
                <input type="text" className="form-control w-50" placeholder="Sensor name" ref={ref => name = ref}/>
                <input type="text" className="form-control mx-2" placeholder="Units" ref={ref => units = ref}/>
                <button className="btn btn-primary" onClick={onClickCreateSensor}>Create</button>
            </div>
        </div>
    );
}

const SensorCreate = props => {
    const {onCreateSensor} = props;
    const device_id = props.match.params.device_id;
    return (
        <CreateSensorForm onCreateSensor={onCreateSensor} device_id={device_id}/>
    );
};

export default SensorCreate;