import React, {useState} from 'react';

function PinInput () {
    const [pin, setPin] = useState('');

    async function validatePin() {
        try {
            const response = await fetch('/verify-pin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    pin: pin,
                }),
            });
            return await response.json()
        } catch (error) {
            console.error(error);
        }
    }

    function setPinInput(event) {
        const pattern = /^[0-9]*$/;
        if (!pattern.test(event.target.value)) return;
        setPin(event.target.value);
    }

    function handlePinSubmit(event) {
        validatePin()
            .then((response) => {
            console.log(response.response);
        });
    }

    return (
        <div>
            <h3>Enter your pin</h3>

            <form onSubmit={handlePinSubmit}>
                <input type="text" name="pin" id="pin" onChange={setPinInput} placeholder="Enter your pin" value={pin}/>
                <button type="submit" onSubmit={handlePinSubmit} >Submit</button>
            </form>

        </div>
    );
}

export default PinInput;