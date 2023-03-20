import React, { Component } from 'react'
import Overview from './components/Overview'
import uniqid from "uniqid";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      task: {text: "", id: uniqid()},
      taskArr: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  handleChange(e) {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
      },
    })
  }

  deleteTask(id) {
    console.log(this.state)
    this.setState({
      taskArr: this.state.taskArr.filter(task => {
        return task.id !== id
      })
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      taskArr: this.state.taskArr.concat(this.state.task),
      task: {
        text: "",
        id: uniqid(),
      },
    })
  }

  render() {

    return(
      <div>
        <form>
          <label htmlFor="task">
            Enter new task: <input 
              name="task"
              type="text"
              placeholder="Enter task here"
              onChange={(e)=>{
                this.handleChange(e)
              }}
              value={this.state.task.text}
            />
          </label>
          <button onClick={(e)=>{this.handleSubmit(e)}}>Submit</button>
        </form>
        <Overview taskArr={this.state.taskArr} handleDelete={this.deleteTask} />
      </div>
    )
  }
}
