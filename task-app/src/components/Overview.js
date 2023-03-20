import React, { Component } from "react";

export default class Overview extends Component {
    constructor(props) {
        super(props)
    }


    render() {

        return (
            <div>
                <h3>Tasks:</h3>
                <ul>
                    {this.props.taskArr.map(taskItem => {
                        return <li key={taskItem.id}>{taskItem.text}</li>
                    })}
                </ul>
            </div>
        )
    }
}