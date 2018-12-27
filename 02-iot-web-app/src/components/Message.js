import React from 'react';

const Message = props => {
    const {message, onMessageClose} = props;
    const onClickMessageClose = e => {
        e.preventDefault();
        onMessageClose();
    };
    return (
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <span>{message}</span>
            <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={onClickMessageClose}>
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    );
};

export default Message;