import React, {useState, useRef} from 'react';
import PropagateLoader from "react-spinners/PropagateLoader";
import ContinueResetButtons from './components/ContinueResetButtons';

function WithdrawInputs(props) {
   const InputRef = useRef(null);
   const ConvertButtonRef = useRef(null);
   const MaxButtonRef = useRef(null);
   const ConvDivRef = useRef(null);
   const [usdWithdrawAmount, setUsdWithdrawAmount] = useState('');
   const [exceedsBalance, setExceedsBalance] = useState(false);
   const [isMoreThanMin, setIsMoreThanMin] = useState(false);
   const [valueValid, setValueValid] = useState(false);
   const [isLoading, setIsLoading] = useState(false);
   const [hasError, setHasError] = useState(false);
   let isInputValid = !exceedsBalance && isMoreThanMin;

   // function that checks if the USD input is valid
   function checkUsdIsValid(value) {
      {(+value >= 20) ? setIsMoreThanMin(true) : setIsMoreThanMin(false)}
      {(+value <= +props.max) ? setExceedsBalance(false) : setExceedsBalance(true)}
   }

   function disableInput (bool) {
      ConvertButtonRef.current.disabled = bool;
      InputRef.current.disabled = bool;
      MaxButtonRef.current.disabled = bool;
   }

   //validate input, regex check for letters, remove commas from the value, then format the value to have the correct commas
   function validateAndSetUsd(value) {
      const pattern = /^[0-9,. ]*$/;
      if (!pattern.test(value)) return;
      const strippedVal = value.replace(/,/g, '');
      let formattedValue = Number(strippedVal).toLocaleString();
      (formattedValue === '0') ? setUsdWithdrawAmount('') : setUsdWithdrawAmount(formattedValue);
   }

   function setToMax() {
      validateAndSetUsd(props.max.toString());
      checkUsdIsValid(props.max);
   }

   function withdrawalInputChangeHandler(event) {
      checkUsdIsValid(event.target.value.replace(/,/g, ''));
      validateAndSetUsd(event.target.value.toString());
   }

   function handleConversionReset(event) {
      event.preventDefault();
      disableInput(false);
      ConvDivRef.current.innerHTML = '';
      setValueValid(false);
   }

   async function fetchData(event) {
      event.preventDefault();
      setIsLoading(true);
      if (isInputValid) {
         try {
            const response = await fetch('/create-withdrawal-session', {
               method: 'POST',
               headers: {
                  'Content-Type': 'application/json',
               },
               body: JSON.stringify({
                  usdWithdrawAmount: usdWithdrawAmount,
               }),
            });
            return await response.json()
         } catch (error) {
            console.error(error);
            setHasError(true);
         }
      }
   }

   function ConfirmAndConvertUsd(event) {
      disableInput(true);
      fetchData(event)
         .then(data => {
            const newElement = document.createElement("p");
            if (+data.usd >= 20 && data.result) {
               setValueValid(data.result);
               newElement.textContent = `The GBP value of your withdrawal will be £${data.gbp}`;
            } else {
               newElement.textContent = 'Invalid amount';
            }
            setIsLoading(false);
            //if data.gbp is less than 20, display a message saying that the withdrawal amount is less than £20
            ConvDivRef.current.appendChild(newElement);

         }).catch(error => {
         console.error('Error:', error);
         setHasError(true);

      });
   }

   if (hasError) return (<p>oops something went wrong</p>);

   return (
      <div>
         <h3>Request Withdrawal</h3>
         <p>Please enter a withdrawal amount and convert to GBP:</p>
         <p>Your account balance is ${props.max}</p>
         <form onSubmit={ConfirmAndConvertUsd}>
            <label htmlFor="UsdWithdrawAmount">Withdrawal Amount In USD($)</label>
            <input ref={InputRef} type="text" id="UsdWithdrawAmount" name="UsdWithdrawAmount" maxLength="8" onChange={withdrawalInputChangeHandler} value={usdWithdrawAmount}/>
            {isInputValid && <button ref={ConvertButtonRef} id="convert-btn" onClick={ConfirmAndConvertUsd}>Convert</button>}
         </form>
         {exceedsBalance && <span>Amount entered exceeds account balance</span>}
         {!isMoreThanMin && <span>Amount needs to equal $20 or more</span>}
         <button ref={MaxButtonRef} onClick={setToMax} >Max</button>

         <div ref={ConvDivRef} ></div>
         {isLoading &&
            <PropagateLoader color={"#5f66e6"} size={25} aria-label="Loading Spinner" data-testid="loader"/>
         }
         {isInputValid && valueValid &&
            <ContinueResetButtons link={'/withdraw/withdraw-details'} handleConversionReset={handleConversionReset}/>
         }
      </div>
   );
}

export default WithdrawInputs;
