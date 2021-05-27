import React, { Component } from 'react'

 class Progress extends Component {
    statusTodo=()=>{
        // console.log(this.props.prog.id);
        this.props.statusHandler(this.props.prog.id,'todo')
    }
    statusDone=()=>{
        // console.log(this.props.prog.id);
        this.props.statusHandler(this.props.prog.id,'done')
    }

    render() {
        return (
            <div>
                <li className="progress-item">{this.props.prog.task}</li>
                <button onClick={this.statusTodo}>Todo</button>
                <button onClick={this.statusDone}>Complete</button>
            </div>
        )
    }
}

export default Progress
