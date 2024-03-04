import React, {useState, useRef} from 'react';
import ContinueResetButtons from './components/ContinueResetButtons';
import SendIcon from '@mui/icons-material/Send';
import LoadingButton from '@mui/lab/LoadingButton';

function WithdrawInputs(props) {
   const InputRef = useRef(null);
   const ConvertButtonRef = useRef(null);
   const MaxButtonRef = useRef(null);
   const ConvMsgRef = useRef(null);
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
      {(+value <= +props.max.toString().replace(/,/g, '')) ? setExceedsBalance(false) : setExceedsBalance(true)}
   }

   function disableInput (bool) {
      ConvertButtonRef.current.disabled = bool;
      InputRef.current.disabled = bool;
      MaxButtonRef.current.disabled = bool;
   }

   //validate input, regex check for letters, remove commas from the value, then format the value to have the correct commas
   function validateAndSetUsd(value) {
      const strippedVal = value.replace(/,/g, '');
      let formattedValue = strippedVal.toLocaleString();
      (formattedValue === '0') ? setUsdWithdrawAmount('') : setUsdWithdrawAmount(formattedValue);
   }

   function setToMax() {
      let strippedMax = props.max.toString().replace(/,/g, '');
      validateAndSetUsd(strippedMax);

      checkUsdIsValid(strippedMax);
   }

   function withdrawalInputChangeHandler(event) {
      const pattern = /^[0-9,. ]*$/;
      if (!pattern.test(event.target.value)) return;
      checkUsdIsValid(event.target.value.replace(/,/g, ''));
      validateAndSetUsd(event.target.value.toString());
   }

   function handleConversionReset(event) {
      event.preventDefault();
      disableInput(false);
      ConvMsgRef.current.innerHTML = '';
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
            if (+data.usd >= 20 && data.result) {
               setValueValid(data.result);
   
               ConvMsgRef.current.textContent = `You will receive £${data.gbp}`;
            } else {
               ConvMsgRef.current.textContent = 'Invalid amount';
            }
            setIsLoading(false);
   
         }).catch(error => {
            console.error('Error:', error);
            setHasError(true);
         });
   }
   

   if (hasError) return (<p>oops something went wrong</p>);

   return (
      <div>
         <h1>Request Withdrawal</h1>
         <p>Your account balance is <span>${props.max}</span></p>
         <form onSubmit={ConfirmAndConvertUsd}>
            <label htmlFor="UsdWithdrawAmount">Withdrawal Amount In USD($)</label>
            <input ref={InputRef} type="text" id="UsdWithdrawAmount" name="UsdWithdrawAmount" placeholder="$100" maxLength="8" onChange={withdrawalInputChangeHandler} value={usdWithdrawAmount}/>
            {isInputValid && 
               <LoadingButton
                  className="btn"
                  style={{ fontSize: "0.825rem" }}
                  id="convert-btn"
                  ref={ConvertButtonRef}
                  loading={isLoading}
                  loadingPosition="end"
                  endIcon={<SendIcon />}
                  variant="outlined"
                  onClick={ConfirmAndConvertUsd}
                  >
                  Convert
               </LoadingButton> 
            }
            <button className="btn" ref={MaxButtonRef} onClick={setToMax} >Max</button>
         </form>
         {exceedsBalance && <span className="user-msg">Amount entered exceeds account balance</span>}
         {!isMoreThanMin && <span className="user-msg">$20 minimum withdrawal</span>}
         

         <p ref={ConvMsgRef} className="conv-data"></p>

         {isInputValid && valueValid &&
            <ContinueResetButtons link={'/withdraw/withdraw-details'} handleConversionReset={handleConversionReset}/>
         }
      </div>
   );
}

export default WithdrawInputs;
