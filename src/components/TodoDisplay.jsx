import React, { Component } from 'react'
import Todo from './TodoList.jsx';

class TodoDisplay extends Component {
    
   
    render() {

        return (
        <div>
            <h2>ToDo</h2>
            <ol className="todo-display">
                {this.props.todos.map(todo=>todo.status==='todo'?<Todo todo={todo} key={todo.id} 
                statusHandler={this.props.statusHandler}
                deleteTodoItem={this.props.deleteTodoItem}
                />:null)}
            </ol>
            <h2>Progress</h2>
            <ol className="progress-display">
                {this.props.todos.map(todo=>todo.status==='progress'?<Todo todo={todo} key={todo.id}
                statusHandler={this.props.statusHandler}
                deleteToDoItem={this.props.statusHandler}
                />:null)}
            </ol>
            <h2>Completed</h2>
            <ol className="completed-display">
                {this.props.todos.map(todo=>todo.status==='done'?<Todo todo={todo} key={todo.id}/>:null)}
            </ol>
        </div>
        )
          
        
    }
}

export default TodoDisplay






