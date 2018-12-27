import React from 'react';

const User = props => {
    const {user} = props;
    return (
        <div className="row justify-content-center">
            <div className='col-6'>
                {
                    user ?
                        (
                            <ul className="list-group">
                                <li className="list-group-item ">{`Username: ${user.username}`}</li>
                                <li className="list-group-item">{`Email: ${user.email}`}</li>
                                <li className="list-group-item">{`data_token: ${user.data_token}`}</li>
                                <li className="list-group-item">{`Devices: ${user.devices.length}`}</li>
                            </ul>
                        ):
                        (
                            <p className="h1 text-danger">User data not found</p>
                        )
                }

            </div>
        </div>
    );
};

export default User;