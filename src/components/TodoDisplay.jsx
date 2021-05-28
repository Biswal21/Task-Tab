import React, { Component } from 'react'
import Todo from './Todo.jsx';
import Progress from './Progress';
import Completed from './Completed.jsx';

class TodoDisplay extends Component {
    
    // statusProgress=(id)=>{
    //     // console.log(this.props.todo.id);
    //     this.props.statusHandler(id,'progress')
    // }
    
    // deleteItem=(id)=>{
    //     // console.log(this.props.todo.id);
    //     this.props.deleteTodoItem(id)
    // }
    // statusTodo=(id)=>{
    //     // console.log(this.props.prog.id);
    //     this.props.statusHandler(id,'todo')
    // }
    // statusDone=(id)=>{
    //     // console.log(this.props.prog.id);
    //     this.props.statusHandler(id,'done')
    // }
    
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






