import ComponentC from "./ComponentC";

const ComponentB = props => {
    return <ComponentC func={props.func}/>
}

export default ComponentB;