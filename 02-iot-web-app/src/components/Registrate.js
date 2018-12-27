import React from 'react';
const Registrate = props => {
    let username, email, password, confirmPassword;
    const {onSubmitRegistrateForm, setErrorMessage} = props;
    const onSubmitForm = e => {
        e.preventDefault();
        if (password.value !== confirmPassword.value) {
            setErrorMessage('Password is not confirmed.');
        }
        else {
            onSubmitRegistrateForm(username.value, password.value, email.value);
        }
    };
    return (
        <div className="row justify-content-center">
            <div className='col-6'>
                <form className="bg-light border rounded p-3" onSubmit={onSubmitForm}>
                    <div className="form-group">
                        <label htmlFor="usernameInput">Username</label>
                        <input type="text" className="form-control" id="usernameInput" placeholder="Username" ref={input => username = input}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="emailInput">Email address</label>
                        <input type="email" className="form-control" id="emailInput" aria-describedby="emailHelp" placeholder="Enter email" ref={input => email = input}/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="passwordInput">Password</label>
                        <input type="password" className="form-control" id="passwordInput" placeholder="Password" ref={input => password = input}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="conformPasswordInput">Confirm password</label>
                        <input type="password" className="form-control" id="conformPasswordInput" placeholder="Confirm password" ref={input => confirmPassword = input}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Registrate;