import React from 'react';

const PhoneInput = props => {

    let formControl = "form-control";

    if (props.touched && !props.valid) {
        formControl = 'form-control control-error';
    }

    return (
        <div className="form-group">
            <label for="phone"><i className="zmdi zmdi-phone"></i></label>
            <input type="tel" 
            name="phone"
            id="phone"
            // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            {...props} 
            />
            <div className={formControl}>Enter a valid phone number</div>
        </div>
    );
}

export default PhoneInput;