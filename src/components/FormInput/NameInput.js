import React from 'react';

const NameInput = props => {

    let formControl = "form-control";

    if (props.touched && !props.valid) {
        formControl = 'form-control control-error';
    }

    return (
        <div className="form-group">
            <label for="name"><i className="zmdi zmdi-account"></i></label>
            <input type="text" 
            name="name"
            id="name"
            autocomplete="new-password"
            {...props} 
            />
            <div className={formControl}>Minimum of 3 letters</div>
        </div>
    );
}

export default NameInput;