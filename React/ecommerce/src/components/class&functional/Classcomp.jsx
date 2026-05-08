
import React from "react";
 
export class Classcomp extends React.Component {
    state = {
        count: 0
    }
 
 
    render() {
        return (
            <>
 
                <h2>I'm from Class based comp</h2>
                <p>We will discuss dfifrrent topics today</p>
                <h3>Count is {this.state.count}</h3>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>increment</button>
            </>
        )
    }
}
 

/*Why this.state?

In Class Components:

this refers to current object/component.
State belongs to component object.

So:

this.state

means:

current component's state */