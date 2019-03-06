import React, { Component, Fragment } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import FormModal from './FormModal.js';

class ShowEmployees extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false,value: null };
    this.handleClick = this.handleClick.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.loadData = this.loadData.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClick(employee) {
    console.log(employee);
    // let id = e.target.value.split(",")
     this.props.deleteEmployee(employee);
  }

  handleEdit(employer) {
    this.props.editEmployer(employer);
    this.handleClose();
    
  }
  handleShow(employer) {
    this.setState({ show: true, value: employer });
  }
  handleClose(){
    this.setState({show: false, value: null});
  }
  shouldComponentUpdate(nextProps, nextState) {
    if(nextState.show != nextProps.show)
      return (nextState.show != nextProps.show);
    return (nextProps.data != this.props.data);
  }
  loadData(newState) {
    this.setState(newState);
  }

  render() {
    let modalClose = () => this.setState({ show: false });
    return (
      <Fragment><br></br>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              {this.props.header.map((val, key) => {
                return <th key={key}>{val}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {this.props.data.map((datum, index) =>
              (<tr key={index}>
                <td>{datum.id}</td>
                <td>{datum.name}</td>
                <td>{datum.role}</td>
                <td>{datum.age}</td>
                <td>{datum.task}</td>
                <td><Button onClick={(e)=>{this.handleClick(datum)}}>Delete</Button></td>
                <td><Button onClick={(e) => {this.handleShow(datum)}}>Edit</Button></td>
              </tr>)
            )}
          </tbody>
        </Table>
      {this.state.show ? (<FormModal show={this.state.show} onHide={this.handleClose} formText="Edit Employer" editEmployer={this.handleEdit} value={this.state.value}/>) : null}  

      </Fragment>
    );
  }
}

export default ShowEmployees;