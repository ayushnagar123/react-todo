import React from 'react';

class Todolist extends React.Component{
    
    render(){
        return (
            <div>
                <li>{this.props.title} {this.props.id}</li>
            </div>
        )
    }
}
export default Todolist;