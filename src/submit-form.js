import React, { useContext } from "react";
import RequestFormButton from './request-form-button'

export default function SubmitForm() {
  return (
    <div style={{display: "flex"}}>
      <form style={{display: "inline-block"}}>
        <label>
          Name of Comic:
          <input type="text" />
        </label>
        <label>
          Year of Release:
          <input type="text" />
        </label>
        <label>
          Your Email:
          <input type="text" />
        </label>

        <RequestFormButton />
      
      </form> 
    </div>
  );
}
