import React, { Component } from 'react'

 class Todo extends Component {

     statusProgress=(id)=>{
        // console.log(this.props.todo.id);
        this.props.statusHandler(id,'progress')
    }
    
    deleteItem=(id)=>{
        // console.log(this.props.todo.id);
        this.props.deleteTodoItem(id)
    }
    statusTodo=(id)=>{
        // console.log(this.props.prog.id);
        this.props.statusHandler(id,'todo')
    }
    statusDone=(id)=>{
        // console.log(this.props.prog.id);
        this.props.statusHandler(id,'done')
    }

    render() {
        const {id, task, status}=this.props.todo
        switch (status) {
            case 'todo':return(
                <div>
                    <li className="todo-item">{task}</li>
                    <button onClick={()=>this.statusProgress(id)}>Progress</button>
                    <button onClick={()=>this.deleteItem(id)}>Delete</button>
                </div>
            )
            case 'progress':return(
                <div>
                    <li className="progress-item">{task}</li>
                    <button onClick={()=>this.statusTodo(id)}>ToDo</button>
                    <button onClick={()=>this.statusDone(id)}>Completed</button>
                </div>
            )
            case 'done':return(
                <div>
                    <li className="completed-item">{task}</li>
                </div>
            )
            default: return(
                <div className="error">
                    Something Went Wrong =/
                </div>
            )
        }
    }
}

export default Todo
