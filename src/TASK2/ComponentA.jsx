import React from "react";
import ComponentB from "./ComponentB";
import "./../TASK2/ComponentA.css"

class ComponentA extends React.Component {
    constructor(props) {
        super(props);
        this.state = { number: 'Click button to see a random number' };
        this.changeNumberState = this.changeNumberState.bind(this);
}

    changeNumberState(random) {
        const NUMBER = 1000;
        this.setState({
                number: random.toFixed(3) * NUMBER,
        
        }
)
    }

    render() {
        return (

            <div className="text">
                <h1>TASK 2</h1>
                <div className="number">
                    {this.state.number || null}
                </div>
                <ComponentB func={this.changeNumberState}/>
            </div>
        )
    }

}

export default ComponentA;