import React, { useContext } from "react";
import StylesContext from "./styles-context";

export default function RequestFormButton() {
 const buttonStyling = useContext(StylesContext)
    return (
    <div>
      <button style={buttonStyling}>
        Click Here!
      </button>
      <input style={buttonStyling} type="submit" value="Submit" />

    </div>
  );
}
