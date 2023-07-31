import React from 'react';

function Form(props) {
   return (
      <form onSubmit={ConfirmAndConvertGbp}>
         <label htmlFor="GbpDepositAmount">Deposit Amount in GBP(£)</label>
         <input ref={InputRef} type="text" id="GbpDepositAmount" name="GbpDepositAmount" maxLength="8" onChange={props.setGbpDepositAmountHandler} value={props.gbpDepositAmount}/>
         <button ref={ButtonRef} id="convert-btn" onClick={props.ConfirmAndConvertGbp} >Convert</button>
      </form>
   );
}

export default Form;