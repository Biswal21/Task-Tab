import React, { Component } from 'react'
import Todo from './TodoList.jsx';
import '../styling/TodoDisplay.css';

class TodoDisplay extends Component {
    
   
    render() {

        return (
        <div className='todo-container'>
            <div className="header-container">
            <h2 className='todo-header' id='todo'>ToDo</h2>
            <h2 className='todo-header'id='progress' >In Progress</h2>
            <h2 className="todo-header" id='completed'>Completed</h2>
            </div>
            <div className="list-container">
            <ol className="todo-display">
                {this.props.todos.map(todo=>todo.status==='todo'?<Todo todo={todo} key={todo.id} 
                statusHandler={this.props.statusHandler}
                deleteTodoItem={this.props.deleteTodoItem}
                />:null)}
            </ol>
            
            <ol className="progress-display">
                {this.props.todos.map(todo=>todo.status==='progress'?<Todo todo={todo} key={todo.id}
                statusHandler={this.props.statusHandler}
                deleteToDoItem={this.props.statusHandler}
                />:null)}
            </ol>
  
            <ol className="completed-display">
                {this.props.todos.map(todo=>todo.status==='done'?<Todo todo={todo} key={todo.id}/>:null)}
            </ol>
            </div>
        </div>
        )
          
        
    }
}

export default TodoDisplay






