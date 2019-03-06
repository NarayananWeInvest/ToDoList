import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

export default class ShowTask extends Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [], current: '',  }
    // this.handleTask = this.handleTask.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount(){
    debugger;
      this.setState({tasks: this.props.tasks});
  }

  shouldComponentUpdate(nextProps, nextState){
    debugger;
    if(nextProps.tasks != nextState.tasks){
      this.setState({tasks: nextProps.tasks})
      return nextProps.tasks != nextState.tasks;
    }
  }

  handleClick(e){
    debugger;
    this.props.deleteTask(e)
  }

  handleChange(e){
    debugger;
    this.setState({current: e.target.value})
  }

  render() {
    let { task } = this.state.tasks
    return (
      <div className="container">
      <div id="employee_page">
          Tasks 
        </div><br></br>
      <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              {this.props.header.map((val, key) => {
                return <th key={key}>{val}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {this.props.tasks.map((datum, index) =>
              (<tr key={index}>
                <td>{datum.id}</td>
                <td>{datum.name}</td>
                <td>{datum.employer}</td>
                <td><Button onClick={(e)=>{this.handleClick(datum)}}>Delete</Button></td>
                <td><Button onClick={(e) => {this.handleShow(datum)}}>Edit</Button></td>
              </tr>)
            )}
          </tbody>
        </Table>
      </div>
    )
  }
}

