import React, {useState} from 'react';

function PinInput (props) {

    return (
        <div>
            <h3>Enter your pin</h3>

            <form>
                <input type="text" name="pin" id="pin" placeholder="Enter your pin" />
                <button type="submit">Submit</button>
            </form>

        </div>
    );
}

export default PinInput;