import React, { Component } from "react";
import trashIcon from "../assets/trash-solid.svg"
import '../styles/style.css';

export default class Overview extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        let count = 0;

        return (
            <div>
                <h3>Tasks:</h3>
                <ul>
                    {this.props.taskArr.map(taskItem => {
                        return <li key={taskItem.id}>
                            {++count}. {taskItem.text}
                            <img 
                                id={taskItem.id}
                                src={trashIcon} 
                                alt="Trash can icon" 
                                className="trash-icon"
                                onClick={() => {
                                    this.props.handleDelete(taskItem.id)
                                }}
                            ></img>
                            </li>
                    })}
                </ul>
            </div>
        )
    }
}