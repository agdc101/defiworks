import React from 'react';

function ContinueResetButtons(props) {
   return (
      <div className="reset-btns">
         <button className="btn" id="reset-btn" onClick={props.handleConversionReset}>Reset</button>
         <a className="btn" id="confirm-continue-btn" href={props.link} >Continue</a>
      </div>
   );
}

export default ContinueResetButtons;