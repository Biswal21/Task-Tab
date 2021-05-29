import React, { Component } from 'react'

class TodoForm extends Component {
    
  
    render() {
        return (
            <form className='form' onSubmit={this.props.formHandler} tabIndex='0'>
               <input className='input-slot' value={this.props.userInput} type="text" placeholder='Add Task' onChange={this.props.inputHandler}/>
               <button className='submit-btn' type="submit">
                   <div className="add"></div>
               </button>         
            </form>
        )
    }
}

export default TodoForm
