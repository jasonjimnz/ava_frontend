import React, {Component} from 'react';
import {Redirect, withRouter} from 'react-router-dom';
import logo from './logo.svg';
import micro from './microfono.svg';
import styles from './styles.scss';

class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      token: null,
      textAction: false
    };
    this.loginAction = this.loginAction.bind(this);
    this.renderLoginForm = this.renderLoginForm.bind(this);
    this.assistantAction = this.assistantAction.bind(this);
  }

  loginAction(event){
    event.preventDefault();
    const {email, password} = this.state;
    const loginResponse = window.app_storage.api.loginAction(email, password);
    if (loginResponse){
      loginResponse.then((r) => {
        window.app_storage.data.token = r.token;
        this.setState({token: r.token});
      })
    }
  }

  assistantAction(event){
    event.preventDefault();
  }

  renderLoginForm(){
    return <form className="form" method="POST" onSubmit={this.loginAction}>
      <div className="field">
        <label className="label">Correo electrónico</label>
        <div className="control">
          <input type="text" className="input" onChange={(e) => {this.setState({email: e.target.value})}}/>
        </div>
      </div>
      <div className="field">
        <label className="label">Contraseña / PIN</label>
        <div className="control">
          <input type="password" className="input" onChange={(e) => {this.setState({password: e.target.value})}}/>
        </div>
      </div>
      <div className="field button-list">
        <button className="button">Registrarse</button>
        <button className="button" type="submit">Iniciar sesión</button>
      </div>
    </form>
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
    if (window.app_storage.data.token)
      return <Redirect to="/" />;
    return <div className="login-container">
      <div className="image-container logo-container">
        <img className="logo" src={logo} alt="Ava Logo" />
      </div>
      <div className="form-container">
        <div className="form-card">
          {this.state.textAction ? this.renderVoiceForm() : this.renderLoginForm()}
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

export default withRouter(Login);