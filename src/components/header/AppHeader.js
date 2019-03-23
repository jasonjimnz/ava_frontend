import React, {Component} from 'react';
import {Link} from "react-router-dom";

class AppHeader extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return <nav className="navbar is-black" role="navigation" aria-label="main navigation" style={{backgroundColor: "#b9815b"}}>
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          Proyecto A.V.A
        </a>

        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"/>
          <span aria-hidden="true"/>
          <span aria-hidden="true"/>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link to="/" className="navbar-item">
            Home
          </Link>

          <Link to="/task_list" className="navbar-item">
            Lista de recados
          </Link>
        </div>
      </div>
    </nav>
  }
}

export default AppHeader;