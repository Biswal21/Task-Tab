import React, { Component } from 'react'

 class Completed extends Component {
   

    render() {
        return (
            <div>
                <li className="completed-item">{this.props.done.task}</li>
            </div>
        )
    }
}

export default Completed
