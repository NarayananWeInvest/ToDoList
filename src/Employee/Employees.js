import React, {Component} from 'react'
import ShowEmployees from './ShowEmployees';
import AddEmployee from './AddEmployee';
import Button from 'react-bootstrap/Button';
import Tasks from '../Task/Tasks';
import {Link} from 'react-router-dom';

export default class Employees extends Component{
  constructor(props){
    super(props);
    this.state = {
      TableContext: [
        {
          id:1,
          name: "narayanan",
          role: "Front end and Back end",
          age: 22,
          task: "SCB"
        },
        {
          id: 2,
          name: "santhosh",
          role: "Front end and Back end", 
          age: 22,
          task: "K-Bank"
        },
        {
          id: 3,
          name:"yashwanth",
          role: "Quantitative Analyst",
          age: 21,
          task: "Strategy"
        }
      ],
      header: [ 'id', 'name', 'role', 'age', 'task', '', '' ],
      show: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.editEmployer = this.editEmployer.bind(this);
  }
  addEmployer=(employer)=>{
    let {TableContext} = this.state;
     employer.id = TableContext.length + 1
     let addData = TableContext.concat(employer);
     this.setState({TableContext: addData})
     this.handleClose();
  }
  deleteEmployee = (emp) => {
    let { id } = emp;
    let { TableContext } = this.state;
    let result = TableContext.filter(emp => (id !== emp.id));
    this.setState({
      TableContext: result
    }, () => console.log("test",this.state.TableContext));
  }

  editEmployer(emp){
    let foundRecord = this.state.TableContext.map(employee => {
      if(employee.id === emp.id){
        return emp
      }else {
        return employee
      }
    });
    this.setState({TableContext: foundRecord})
  }

  handleClick(){
    this.setState({show: true});
  }

  handleClose(){
    this.setState({show: false});
  }

  render(){
    debugger
    return(
      <div className="employee"> 
        <Link to={ {pathname:"/Tasks", state: this.state.TableContext} } >Task</Link> 
        <div id="employee_page">
          Employee Details
        </div><br></br>
        <Button onClick={this.handleClick}>Add Employer</Button> 
        <AddEmployee show={this.state.show} onHide={this.handleClose} addEmployer={this.addEmployer} /> 
        <ShowEmployees data={this.state.TableContext} header={this.state.header} editEmployer={this.editEmployer} deleteEmployee={this.deleteEmployee} />
      </div>
    )
  }
}