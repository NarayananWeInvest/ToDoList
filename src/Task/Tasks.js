import React, { Component } from 'react';
import ShowTask from './ShowTask';
import AddTask from './AddTask';
import Button from 'react-bootstrap/Button';

var newTasks = ""

export default class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [
      {
      id: 1,
      name: 'deploy',
      employer: 'narayanan'
    },
    {
      id: 2,
      name: 'test',
      employer: 'santhosh'
    }
   ],
    
    header: ['id', 'name','employer','',''],
    show: false,
    employees: []
  }
  debugger;
    this.addTasks = this.addTasks.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleShow(){
    debugger;
    this.setState({show: true});
  }

  handleClose(){
    this.setState({show: false});
  }

  addTasks(tasks){
    debugger;
    let newId = this.state.tasks.length + 1
    let newT = {id: newId, name: tasks.task, employer: tasks.employer}
    let newTask = this.state.tasks.concat(newT);
    this.setState({tasks: newTask},() => {})
    this.handleClose();
  }

  deleteTask(task){
    debugger;
    let filteredTasks = this.state.tasks.filter(t => (t.id != task.id))
    this.setState({tasks: filteredTasks})
  }

  render() {
    debugger
    let { tasks } = this.state.tasks
    return (
      <div className="container">
        <Button name="task" onClick={this.handleShow}> Add Task </Button>
        <AddTask show={this.state.show} onHide={this.handleClose} addTasks={this.addTasks} employees={this.props.location.state} formText="Add Task"/>
        <ShowTask tasks={this.state.tasks} header={this.state.header} deleteTask={this.deleteTask}/>
        {/* <AddTask employees={this.props.employees} /> */}
        {/* {this.state.tasks.length > 0 ? (<ShowTask tasks={this.state.tasks} deleteTask={this.deleteTask}/>) : null} */}
      </div>
    )
  }
}

