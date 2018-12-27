import React from 'react';
const Registrate = props => {
    return (
        <div className="row justify-content-center">
            <div className='col-6'>
                <form className="bg-light border rounded p-3">
                    <div className="form-group">
                        <label htmlFor="usernameInput">Username</label>
                        <input type="text" className="form-control" id="usernameInput" placeholder="Username"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="emailInput">Email address</label>
                        <input type="email" className="form-control" id="emailInput" aria-describedby="emailHelp" placeholder="Enter email"/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="passwordInput">Password</label>
                        <input type="password" className="form-control" id="passwordInput" placeholder="Password"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="conformPasswordInput">Confirm password</label>
                        <input type="password" className="form-control" id="conformPasswordInput" placeholder="Confirm password"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Registrate;