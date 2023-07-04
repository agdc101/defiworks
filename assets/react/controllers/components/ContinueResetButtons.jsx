import React from 'react';

function ContinueResetButtons(props) {
   return (
      <div>
         <a id="confirm-continue-btn" href={props.link} >Continue</a>
         <button id="reset-btn" onClick={props.handleConversionReset}>Reset</button>
      </div>
   );
}

export default ContinueResetButtons;