import React from 'react';
import FunctionalComponent from './FunctionalComponent';
import './ClassComponent.css'



class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
    this.handleChange = this.handleChange.bind(this);

  }

  
  handleChange(e) {
    this.setState( 
        {text: e.target.value}
      )
  }


  render() {
    return (
      <div className="text">
         <h1>TASK 1</h1>
         <input
            id="text"
            onChange={this.handleChange}
            value={this.state.text}
            placeholder='Введіть текст'
          />
          <FunctionalComponent text={this.state.text}/>
       
        
      </div>
    );
  }
}
export default ClassComponent;
