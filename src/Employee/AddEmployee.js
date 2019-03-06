import React, { Component } from 'react';
import '/Users/narayananv/Documents/React_Work/todo-list/src/App.js';
import FormModal from './FormModal.js';
import AddTask from '../Task/AddTask';

class AddEmployee extends Component{
  constructor(props){
    super(props);
    this.state={name:'', role: '', age:'', task:[]}
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  allTasks(tasks){
    debugger;
    let newTasks = this.state.task.concat(tasks);
    this.setState({task: newTasks},()=>{})
  }

  handleSubmit(e){
    let {name, role, age, task} = e      
    this.setState({name: name, role: role, age: age, task: task},()=>{
      this.props.addEmployer({name, role, age, task});
    });
   

  }

  render(){
    return(
      <>
        
        <FormModal show={this.props.show} onHide={this.props.onHide} addEmployer={this.handleSubmit} formText="Add Employer" value={this.state}/>
      </>
        
    );
  }
}

export default AddEmployee;