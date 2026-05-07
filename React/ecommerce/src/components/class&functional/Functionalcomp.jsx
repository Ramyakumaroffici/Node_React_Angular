 //hook function that will return variable and function

import { useState } from "react"
 
 
 
export function Functionalcomp() {
            //1
    const [count, setCount] = useState(0);//1
    //1. count variable is responsible ton store the data
    //2. setCount is responsible to modify data inside count variable
    //3. after that setCOunt immediatley re-renders whole component again (to show new chnages in UI)
    return (
        <>
            <h2>I'm from Functionalcomp based comp</h2>
            <p>We will discuss dfifrrent topics today</p>
            <h3>Count is {count}</h3>
            <button onClick={() => setCount(count + 1)}>increment</button>
        </>
    )
}

/*Initial:
count = 0

Button Click
   ↓
setCount(count + 1)
   ↓
setCount(1)
   ↓
React updates state
   ↓
Component re-renders
   ↓
count = 1 shown in UI*/


/*React returns 2 things from useState():

[countValue, updateFunction]
const [count, setCount] = useState(0) count is int
const [count, setCount] = useState("String") count is string 
const [count, setCount] = useState([0]) the count dataype will change according to this
const [count, setCount] = useState({}) -- object*/