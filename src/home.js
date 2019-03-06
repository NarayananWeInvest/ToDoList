import React,{Component} from 'react'

export default class Home extends Component {
  render() {
    return (
      <div className="home">
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/Employer">Employer</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Tasks">Tasks</a>
          </li>
        </ul>
      </nav>
      </div>
    )
  }
}
