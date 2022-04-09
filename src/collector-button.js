import React, { useContext } from "react";
import StylesContext from "./styles-context";



export default function CollectorButton() {
  
const buttonStyling = useContext(StylesContext)

  return (
    <div>
      <button style={buttonStyling}>
        Click Here!
      </button>
    </div>
  );
}
