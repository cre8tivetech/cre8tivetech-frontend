import React from 'react';

const DateInput = props => {

    let formControl = "form-control";

    if (props.touched && !props.valid) {
        formControl = 'form-control control-error';
    }

    return (
        <div className="form-group">
            <label for="date"><i className="zmdi zmdi-time"></i></label>
            <input type="text" 
            name="date"
            id="date"
            {...props} 
            />
            <div className={formControl}>Minimum of 3 letters</div>
        </div>
    );
}

export default DateInput;