import React from 'react';
import "../assets/css/error-message.css";

const ErrorMessage = (props) => {
    return (
        <div className="error-message-container">
            <span>{props.message}</span>
        </div>
    );
};

export default ErrorMessage;