import React from 'react';

class Todolist extends React.Component{
    
    render(){
        return (
            <div>
                <li>{this.props.name}</li>
            </div>
        )
    }
}
export default Todolist;