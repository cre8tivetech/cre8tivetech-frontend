import React from 'react';

const TextInput = props => {

    let formControl = "form-control";

    if (props.touched && !props.valid) {
        formControl = 'form-control control-error';
    }

    return (
        <div className="form-group">
            <textarea type="text"
                name="textarea" 
                id="textarea"
                autocomplete="new-password"
                {...props} 
            />
            <div className={formControl}>This field is required</div>
        </div>
    );
}

export default TextInput;