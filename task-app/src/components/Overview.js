// Renders tasks
import React, { Component } from 'react';

export class List extends Component {
    render() {
        return (
            <div>
                <p>Tasks</p>
                <ul>
                    { this.props.arr.map(item => (
                        <li key={item.id}>{item.task}</li>
                    )) }
                </ul>
            </div>
        )
    }
}