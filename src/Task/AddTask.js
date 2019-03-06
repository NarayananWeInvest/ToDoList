import React, { Component } from 'react';


class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = { task: '', employer:'' }
    this.handleTask = this.handleTask.bind(this);
    this.handleChange = this.handleChange.bind(this);
   
  }

  handleTask(e) {
    debugger;
    this.props.addTasks(this.state)
    
  }
 
  componentWillMount(){
    debugger;
  }
  handleChange(e){
    debugger;
    let {value, name} = e.target;
      this.setState({[name]: value})
  }
  render() {
   
    return (
      <div className="container">
      <br></br>
      <div className={`modal fade ${this.props.show ? 'show' : ''}`} aria-hidden="true" role="dialog" tabIndex="-1" style={{ display: (this.props.show) ? 'block': 'none' }}>
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
              <input type="text" className="form-control" name="task" placeholder="name" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="name" className="col-sm-2 col-form-label">Employees:</label>
            <div className="col-sm-10">
            <select name="employer"  onChange={this.handleChange}>
                     <option disabled>name</option>
                        {this.props.employees.map((e) => {
                            return <option key={e.id} name= {e.name} value={e.name}>{e.name}</option>;
                        })}
                    </select>
            </div>
          </div>
          <button  type="button" className="btn btn-secondry" onClick={this.props.onHide}>Close</button>
          <button  type="button" className="btn btn-primary" onClick={this.handleTask}>Add Task</button>
        </form>
        </div>
          </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AddTask;