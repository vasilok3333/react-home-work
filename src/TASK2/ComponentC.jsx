import "./ComponentA.css"

const ComponentC = props => (
    <button className="button" onClick={() => props.func(Math.random())}>PUSH ME</button>
)

export default ComponentC;