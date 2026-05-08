import { useState } from "react"
import JobApplication from "./JobApplication";
 
 
export default function Conditioncomp() {
    const [age, setAge] = useState(18);
    return (
        <>
            <h2>Condition Comp</h2>
            <input
                value={age}
                placeholder="Enter Age"
                onChange={(event) => setAge(event.target.value)}
            />
            {age >= 18 ? <JobApplication /> : <h2>Your not eligible to apply job</h2>}
        </>
    )
}