import React, {useState, useRef} from 'react';
import PropagateLoader from "react-spinners/PropagateLoader";
import ContinueResetButtons from './components/ContinueResetButtons';
import Form from "./components/Form";

const DepositInputs = () =>  {
   // state variables
   const ButtonRef = useRef(null);
   const InputRef = useRef(null);
   const ConvDivRef = useRef(null);
   const [gbpDepositAmount, setGbpDepositAmount] = useState('');
   const [isGbpValid, setIsGbpValid] = useState(false);
   const [conversionFetched, setConversionFetched] = useState(false);
   const [hasError, setHasError] = useState(false);
   const [isLoading, setIsLoading] = useState(false);

   // function that checks if the USD amount is valid
   function checkGbpIsValid(value) {
      {(value >= 20) ? setIsGbpValid(true) : setIsGbpValid(false)};
   }

   function switchButtons (bool) {
      ButtonRef.current.disabled = bool;
      InputRef.current.disabled = bool;
   }

   //validate input, regex check for letters etc, remove commas from the value, then format the value to have the correct commas
   function validateAndSetGbp(value) {
      const pattern = /^[0-9, ]*$/;
      if (!pattern.test(value)) return;

      let strippedVal = value.replace(/,/g, '');
      let formattedValue = Number(strippedVal).toLocaleString();

      (formattedValue === '0') ? setGbpDepositAmount('') : setGbpDepositAmount(formattedValue);
   }

   async function retrieveUsdConversion(event) {
      event.preventDefault();
      setIsLoading(true);
      if (isGbpValid) {
         try {
            const response = await fetch('/create-deposit-session', {
               method: 'POST',
               headers: {
                  'Content-Type': 'application/json',
               },
               body: JSON.stringify({
                  gbpDepositAmount: gbpDepositAmount,
               }),
            });
            return await response.json()
         } catch (error) {
            console.error(error);
            setHasError(true);
         }
      }
   }

   function ConfirmAndConvertGbp(event) {
      //disable the GbpDepositAmount input field
      switchButtons(true);
      event.preventDefault();
      ConvDivRef.current.innerHTML = '';

      if (isGbpValid) {
         retrieveUsdConversion(event)
            .then(data => {
               console.log('Data received:', data.usd, data.gbp);
               setIsLoading(false);
               const newElement = document.createElement("p");
               newElement.textContent = `The USD value of your deposit will be $${data.usd}`;
               setConversionFetched(true);
               ConvDivRef.current.appendChild(newElement);

            }).catch(error => {
            console.error('Error:', error);
            setHasError(true);
         });
      }
   }

   // event handlers for the two input fields
   function setGbpDepositAmountHandler(event) {
      checkGbpIsValid(event.target.value.replace(/,/g, ''));
      validateAndSetGbp(event.target.value, 'gbp');
   }

   function handleConversionReset(event) {
      event.preventDefault();
      switchButtons(false);
      ConvDivRef.current.innerHTML = '';
      setConversionFetched(false);
   }

   if (hasError) return (<p>oops something went wrong</p>);

   return (
      <div>
         <div>
            <h3>Enter amount to deposit:</h3>
            <p>Enter the amount you would like to deposit and convert to USD.</p>
            <div>
               <form onSubmit={ConfirmAndConvertGbp}>
                  <label htmlFor="GbpDepositAmount">Deposit Amount in GBP(£)</label>
                  <input ref={InputRef} type="text" id="GbpDepositAmount" name="GbpDepositAmount" maxLength="8" onChange={setGbpDepositAmountHandler} value={gbpDepositAmount}/>
                  {isGbpValid && <button ref={ButtonRef} id="convert-btn" onClick={ConfirmAndConvertGbp} >Convert</button>}
               </form>
               {gbpDepositAmount < 20 && <span>Deposit must be at least £20 in value.</span>}
            </div>
         </div>
         <div ref={ConvDivRef}>
         {isLoading &&
            <PropagateLoader color={"#5f66e6"} size={25} aria-label="Loading Spinner" data-testid="loader"/>
         }
         </div>
         {isGbpValid && conversionFetched &&
            <ContinueResetButtons link={'/deposit/deposit-details'} handleConversionReset={handleConversionReset} />
         }
      </div>
   );
}

export default DepositInputs;