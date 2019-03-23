import React, {Component} from 'react';
import {Redirect, withRouter} from 'react-router-dom';
import logo from '../login/logo.svg';
import micro from '../login/microfono.svg';

class Home extends Component{
  constructor(props){
    super(props);
    this.state = {}
  }

  assistantAction(event){
    event.preventDefault();
  }

  renderVoiceForm(){
    return <form className="form" method="POST" onSubmit={this.assistantAction}>
      <div className="field">
        <label className="label">Escribe tu consulta</label>
        <div className="control">
          <textarea className="textarea" placeholder="Pregúntale a A.V.A"/>
        </div>
      </div>
      <div className="field">
        <button className="button" type="submit">Consultar</button>
      </div>
    </form>
  }

  render(){
    if (!window.app_storage.data.token)
      return <Redirect to="/login" />
    return <div className="login-container">
      <div className="image-container logo-container">
        <img className="logo" src={logo} alt="Ava Logo" />
      </div>
      <div className="form-container">
        <div className="form-card">
          {this.renderVoiceForm()}
        </div>
        <div className="micro-card">
          <div className="image-container">
            <img className="micro" src={micro} alt="Ava microphone" onClick={(e) => {this.setState({textAction: !this.state.textAction})}}/>
          </div>
        </div>
      </div>
    </div>
  }
}

export default withRouter(Home);