//Rules of JSX
/* 1. export function Jsxcomp()
{
    return(
        <React.Fragment>
            <h2>
                Hi
            </h2>
            <p>Hello</p>
        </React.Fragment>
    )
    
    

    
}*/

import React from "react"
 
export function Jsxcomp() {
    var name="Sampath"
    return (
        <>
            <h2 className="dummy">JSx Comp  {4*2} heading {name}</h2>
            <p style={{ color: "green", backgroundColor: "beige" }}>This is para 1</p>
            <button onClick={''}>jsx</button>
        </>
 
    )
}