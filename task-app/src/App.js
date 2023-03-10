import React, { Component } from 'react';
import { List } from './components/Overview';

let nextId = 0;

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {value: '', arr: []};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  
  handleSubmit(event) {
    event.preventDefault();
    const prevArr = this.state.arr;
    const newArr = prevArr.concat({
      id: nextId++,
      task: this.state.value
    });
    this.setState({arr: newArr});
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Task:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <List arr={this.state.arr}/>
      </div>
    );
  }
}

export default App;
