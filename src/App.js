import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todolist from './components/Todolist';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      todoList: [
        {
          id: 0,
          name: "item1",
        },
        {
          id: 1,
          name: "item2",
        },
        {
          id: 2,
          name: "item3",
        },
        {
          id: 3,
          name: "item4",
        },
        {
          id: 4,
          name: "item5",
        }
      ]
    };
  };
  
  render(){
  return (
    <div className="App">
      <Todolist/>
    </div>
  );
  }
}

export default App;
