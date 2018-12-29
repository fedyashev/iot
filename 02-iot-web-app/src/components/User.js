import React from 'react';
import {Link} from 'react-router-dom';

const User = props => {
    const {user} = props;
    return (
        <div className="row justify-content-center">
            <div className='col'>
                {
                    user ?
                        (
                            <ul className="list-group">
                                <li className="list-group-item">{`user_id: ${user._id}`}</li>
                                <li className="list-group-item">{`username: ${user.username}`}</li>
                                <li className="list-group-item">{`email: ${user.email}`}</li>
                                <li className="list-group-item">{`data_token: ${user.data_token}`}</li>
                                <li className="list-group-item">
                                    <span><Link to='/device'>Devices</Link> {user.devices.length}</span>
                                </li>
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