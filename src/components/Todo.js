import React, { Component } from 'react'

 class Todo extends Component {

statusProgress=()=>{
    console.log(this.props.todo.id);
    this.props.statusHandler(this.props.todo.id,'progress')
}

deleteItem=()=>{
    // console.log(this.props.todo.id);
    this.props.deleteTodoItem(this.props.todo.id)
}

    render() {
        const {id,task}=this.props.todo
        return (
            <div>
                <li className="todo-item" key={id}>{task}</li>
                <button onClick={this.statusProgress}>Progress</button>
                <button onClick={this.deleteItem}>Delete</button>
            </div>
        )
    }
}

export default Todo
