import React, { Component } from 'react'
// import ClearList from './ClearList';
import TodoDisplay from './TodoDisplay.jsx';
import TodoForm from './TodoForm';
import '../styling/TodoHandler.css';

class TodoHandler extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             userInput:'',
             todos:[]
        }

        this.inputHandler=this.inputHandler.bind(this)
        this.formHandler=this.formHandler.bind(this)
        this.statusHandler=this.statusHandler.bind(this)
        this.deleteTodoItem=this.deleteTodoItem.bind(this)
        this.clearList=this.clearList.bind(this)
    }


    inputHandler(event){
        this.setState({
            userInput:event.target.value
        })

        // console.log(event.target.value);
    }

    formHandler(event){
        event.preventDefault();
        console.log(this.state.userInput);
        if (this.state.userInput!=='') {
            this.setState(prevState=>({
                todos:[...prevState.todos,{task:this.state.userInput, status:'todo', id:Math.random()*10}],
                userInput:''
            }))
        }
    
    }

    statusHandler(id,status){
        switch (status) {
            case 'progress':{
                this.setState(prevState=>({
                    todos:prevState.todos.map(todo=>((todo.id)===Number(id)?{...todo,status:'progress'}:{...todo}))
                }))
            }
            break;

            case 'todo':{
                this.setState(prevState=>({
                    todos:prevState.todos.map(todo=>((todo.id)===Number(id)?{...todo,status:'todo'}:{...todo}))
                }))
            }
            break;
            case 'done':{
                this.setState(prevState=>({
                    todos:prevState.todos.map(todo=>((todo.id)===Number(id)?{...todo,status:'done'}:{...todo}))
                }))
            }
            break;
        
            default:{return this.state}
        }
    }

    deleteTodoItem(id){
        const refreshedTodo=this.state.todos.filter(todo=>todo.id!==id)
        this.setState({
            todos:refreshedTodo
        })
    }

    clearList(){
        const remainingTodo=this.state.todos.filter(completed=>completed.status!=='done')
        this.setState({
            todos: remainingTodo
        })
    }
    
    

    render() {

        return (
            <div className='glass-container'>
               
                <TodoDisplay 
                todos={this.state.todos} 
                userInput={this.state.userInput}
                statusHandler={this.statusHandler}
                deleteTodoItem={this.deleteTodoItem}
                />

                <button className='clear-btn'
                onClick={this.clearList}>Clear List</button>

                 <TodoForm userInput={this.state.userInput} inputHandler={this.inputHandler} formHandler={this.formHandler} /> 
            </div>
        )
    }
}

export default TodoHandler
