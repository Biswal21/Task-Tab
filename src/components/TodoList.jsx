import React, { Component } from 'react'
import '../styling/TodoDisplay.css'

 class TodoList extends Component {

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
                    <div className="item-btn">
                    <button className='all-btn progress-btn' onClick={()=>this.statusProgress(id)}></button>
                    <button className='all-btn delete-btn' onClick={()=>this.deleteItem(id)}></button>
                    </div>
                </div>
            )
            case 'progress':return(
                <div>
                    <li className="progress-item">{task}</li>
                    <div className="item-btn">
                    <button className='all-btn todo-btn' onClick={()=>this.statusTodo(id)}></button>
                    <button className='all-btn completed-btn' onClick={()=>this.statusDone(id)}></button>
                    </div> 
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

export default TodoList
