import React from 'react';

const EmailInput = props => {

    let formControl = "form-control";

    if (props.touched && !props.valid) {
        formControl = 'form-control control-error';
    }

    return (
        <div className="form-group">
            <label for="email"><i className="zmdi zmdi-email"></i></label>
            <input type="email" 
                name="email"
                id="email"
                autocomplete="new-password"
                {...props} 
            />
            <div className={formControl}>Email address is invalid</div>
        </div>
    );
}

export default EmailInput;