import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import ShowTask from '../Task/ShowTask';
export default class FormModal extends Component{
  constructor(props){
    super(props);
    this.state = {name:'', role: '', age:'', task:[], id: ''}
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


  handleSubmit(e){
    let {name, role, age, task, id} = this.state
    if(this.props.formText === "Add Employer" && name && age && task) {
      this.props.addEmployer({name, role, age, task});
    }
    else if(this.props.formText==="Edit Employer"){
      this.props.editEmployer({name, role, age, task, id});
    }
    else{
      if([name]=="")
        alert("name cannot be null");
      else if([task] == "" )
        alert("taskcannot be null");
      else
        alert("age must be a number and > 0");
    }
    this.setState({name:'', role: '', age:'', task:''})
  }

  componentWillMount(){
    let {name, role, age, task, id} = this.props.value;
    this.setState({name, role, age, task, id});
  }

  handleChange(e){
    let {value, name} = e.target;
      this.setState({[name]: value})
  }

  render(){
    return(
  <div className={`modal fade ${this.props.show ? 'show' : ''}`} 
  aria-hidden="true" role="dialog" tabIndex="-1" style={{ display: (this.props.show) ? 'block': 'none' }}>
  <div className="background-dialog"></div>
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title"> {this.props.formText}</h5>
      </div>
      <div className="modal-body">
      <form>
          <div className="form-group row">
            <label htmlFor="name" className="col-sm-2 col-form-label">Name:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" name="name" placeholder="name" onChange={this.handleChange} value={this.state.name}/>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="role" className="col-sm-2 col-form-label">Role:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" name="role" placeholder="role" onChange={this.handleChange} value={this.state.role}/>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="age" className="col-sm-2 col-form-label">Age:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" name="age" placeholder="age" onChange={this.handleChange} value={this.state.age}/>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="task" className="col-sm-2 col-form-label">Task:</label>
            <div className="col-sm-10">
            
            </div>
          </div>
          </form>
      </div>
      <div className="modal-footer">
      <Button variant="secondry" onClick={this.props.onHide}>
              close
      </Button>
      <Button variant="primary" onClick={this.handleSubmit}>
              Save Changes
      </Button>
      </div>
    </div>
  </div>
</div>

    )
  }
}