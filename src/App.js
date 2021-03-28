import React from 'react';
import ClassComponent from './TASK1/ClassComponent';
import ComponentA from './TASK2/ComponentA';
import './App.css'




class App extends React.Component {
  
  render() {
    return (
      <div className="mainWindow">
      <ClassComponent/>
      <ComponentA/>
      </div>
    );
  }
}
export default App;
