import React from 'react';

const Alert = props => {
    const {message, onAlertClose} = props;
    const onAlertCloseClick = e => {
        e.preventDefault();
        onAlertClose();
    };
    return (
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <span>{message}</span>
            <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={onAlertCloseClick}>
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    );
};

export default Alert;