// import { useContext } from "react"
import React, { useContext } from 'react'

const StylesContext = React.createContext({})

export function StylesProvider({children}){

    const styling = {
        backgroundcolor: "1ECD97",
        display: "inline-block",
        width: 120,
        height: 55, 
        fontSize: 18,
        letterSpacing: 1, 
        border: "2px solid #1ECD97",
        borderRadius: 15
      }

    return (
        <StylesContext.Provider value={styling}>
            {children}
        </StylesContext.Provider>
    )
}

export default StylesContext;