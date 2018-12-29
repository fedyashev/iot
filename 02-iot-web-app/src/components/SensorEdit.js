import React from 'react';

const SensorEditForm = props => {
    const {sensor, onEditSensor} = props;
    const device_id = props.match.params.device_id;
    let name, units;
    const onClickEditSensor = e => {
        e.preventDefault();
        onEditSensor(device_id, sensor._id, name.value, units.value);
    }
    return (
        <div>
            <p className="h3 text-center mb-1">{`Edit sensor: ${sensor.name}`}</p>
            <form>
                <div className="form-group row">
                    <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputName" placeholder="New name" defaultValue={sensor.name} ref={ref => name = ref}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputUnits" className="col-sm-2 col-form-label">Units</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputUnits" placeholder="New units" defaultValue={sensor.units} ref={ref => units = ref}/>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-10">
                        <button className="btn btn-primary" onClick={onClickEditSensor}>Update</button>
                    </div>
                </div>
            </form>
        </div>

    );
}

const SensorEdit = props => {
    return(
        <SensorEditForm {...props}/>
    );
};

export default SensorEdit;