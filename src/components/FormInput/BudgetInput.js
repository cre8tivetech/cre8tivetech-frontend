import React from 'react';

const BudgetInput = props => {

    return (
        <div className="form-group">
            <label for="budget"><i className="zmdi zmdi-money"></i></label>
            <input type="text" 
                name="budget"
                id="budget"
                autocomplete="new-password"
                {...props} 
            />
        </div>
    );
}

export default BudgetInput;