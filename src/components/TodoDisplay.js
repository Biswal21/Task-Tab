import React, { Component } from 'react'
import Todo from './Todo';
import Progress from './Progress';
import Completed from './Completed';

class TodoDisplay extends Component {
    
    
    render() {
        return (
            <div className="todo-display">
                <ol className="todo-list">
                    <h2>ToDo</h2>
                    {this.props.todos.map(todo=> todo.status==='todo'?<Todo todo={todo} key={todo.id+todo.task}
                    // statusProgress={this.props.statusProgress}
                    statusHandler={this.props.statusHandler}
                    deleteTodoItem={this.props.deleteTodoItem}
                    />:null)}
                </ol>
                <ol className="progress-display">
                    <h2>Progress</h2>
                {this.props.todos.map(prog=> prog.status==='progress'?<Progress prog={prog} key={prog.id+prog.task}
                statusHandler={this.props.statusHandler}
                />:null)}
                </ol>
                <ol className="completed-display">
                    <h2>Completed</h2>
                    {this.props.todos.map(done=>done.status==='done'?<Completed done={done} key={done.id+done.task}
                    />:null)}
                </ol>
            </div>            
        )
    }
}

export default TodoDisplay
