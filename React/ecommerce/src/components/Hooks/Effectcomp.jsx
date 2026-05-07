import { useEffect, useState } from "react";
 
 
 
export default function Effectcomp() {
    //[sunt ,asihd,asukgdioawh]
    const [posts, setPosts] = useState([]);
    const [count, setCount] = useState(0);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => {
                setPosts(data);
                console.log("Data fetched")
            })
    },
        [count])//Dependency array if there is no array the data will be fetched infinite loops
 
    console.log(posts);
    return (
        <>
            <button onClick={() => setCount(count + 1)}>increment</button>
            <h2>Effect comp get data from API</h2>
            {posts.map((post, index) => (
                <li key={index}>{post.title}</li>
            ))}
            {count}
 
        </>
    )
 


}
 


/*Component Render
      ↓
useEffect Runs
      ↓
API Fetch
      ↓
setPosts(data)
      ↓
Re-render
      ↓
Posts shown

-------------------------------------------------------------
Click Button
      ↓
setCount(count+1)
      ↓
Re-render
      ↓
count changed
      ↓
useEffect Runs Again
      ↓
API Fetch Again
      ↓
setPosts(data)
      ↓
Re-render Again
-----------------------------------------------------------
1. Empty Array
[]

Means:

✅ Run only once after first render.

2. [count]
[count]

Means:

✅ Run on first render
✅ Run whenever count changes

3. No Dependency Array
useEffect(()=>{})

Means:

❌ Runs after EVERY render

This causes infinite API calls if state updates inside effect.



*/
 