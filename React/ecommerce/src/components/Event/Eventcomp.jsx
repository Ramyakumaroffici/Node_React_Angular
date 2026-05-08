
import { useState } from "react";
 
 
 
export default function Eventcomp() {
    const [name, setName] = useState("");
 
    function handleNameChange(event) {
        setName(event.target.value);
        console.log(event.target.value)
    }
    function handleKeyDown(event) {
        if (event.key == "ArrowDown") {
            console.log("Down arrow pressed")
        }
    }
    function handleBlur() {
        console.log("on Blur")
    }
    function handleFocus() {
        console.log("on Focus")
    }
    function handleSubmit(event) {
        event.preventDefault();
        alert("Submited value is " + name)
       
    }
 
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Enter Name"
                    value={name}
                    onChange={handleNameChange}
                    onKeyDown={handleKeyDown}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}