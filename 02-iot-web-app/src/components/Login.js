import React from 'react';

const Login = props => {
    let username, password;
    const {onLogin} = props;
    const onFormSubmit = e => {
        e.preventDefault();
        onLogin(username.value, password.value);
    };
    return (
        <div className="row justify-content-center">
            <div className='col-sm-12 col-md-8 col-lg-6 col-lx-4'>
                <form className="bg-light border rounded p-3" onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="usernameInput">Username</label>
                        <input type="text" className="form-control" id="usernameInput" placeholder="Username" ref={ref => username = ref}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="passwordInput">Password</label>
                        <input type="password" className="form-control" id="passwordInput" placeholder="Password" ref={ref => password = ref}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;