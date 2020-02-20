import React from 'react';

const BudgetInput = props => {

    return (
        <div className="form-group">
            <label for="budget"><i className="zmdi zmdi-money"></i></label>
            <select id="budget" name="budget" {...props} required>
                <option value="" selected disabled hidden >Please choose amount</option>
                <option value="$100-1000">$100 - $1,000</option>
                <option value="$1000-5000">$1,000 - $5,000</option>
                <option value="$5000-10000">$5,000 - $10,000</option>
                <option value="over-$10000">Over 10,000</option>
                <option value="prepared-to-spend">I'm prepared to spend</option>
                <option value="cant-disclose">Can't disclose</option>
                <option value="not-sure">Not sure</option>
            </select>
        </div>
    );
}

export default BudgetInput;