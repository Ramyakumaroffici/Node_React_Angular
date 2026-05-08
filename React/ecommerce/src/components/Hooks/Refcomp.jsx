import { useRef, useState } from "react"
 
export default function Refcomp() {
    const name = useRef("");//uncontrolled comp

    //useRef will not rerender the component but still it can store value 
    const [name1, setName1] = useState("");//controlled comp
    const handleInput = (event) => setName1(event.target.value);
    console.log(name.current.value)
    return (
        <>
            <h3>Refcomp example</h3>
            <input
                ref={name}
                placeholder="Enter your name"
            />
 
            <label>useState example</label>
            <input
                value={name1}
                placeholder="Enter your name"
                onChange={handleInput}
            />
            {name1}
        </>
    )
}
 

