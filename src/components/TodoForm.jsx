import React, { Component } from 'react'

class TodoForm extends Component {
    
  
    render() {
        return (
            <form onSubmit={this.props.formHandler}>
               <input value={this.props.userInput} type="text" placeholder='Add Task..' onChange={this.props.inputHandler}/>
               <button type="submit">Submit</button>         
            </form>
        )
    }
}

export default TodoForm
