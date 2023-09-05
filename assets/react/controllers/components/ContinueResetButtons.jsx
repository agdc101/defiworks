import React from 'react';

function ContinueResetButtons(props) {
   return (
      <div className="reset-btns">
         <a className="btn" id="confirm-continue-btn" href={props.link} >Continue</a>
         <button id="btn reset-btn" onClick={props.handleConversionReset}>Reset</button>
      </div>
   );
}

export default ContinueResetButtons;