import React, {Component} from 'react';
import logo from '../login/logo.svg';
import styles from './styles.scss';

class Register extends Component{
  constructor(props){
    super(props);
    this.state = {
      registerType: 'user',
      email: '',
      password: '',
      commerceName: '',
      commerceProvince: '',
      commerceCategory: '',
      commerceAddress: '',
      commerceLat: '',
      commerceLon: ''
    };
    this.renderRegisterForm = this.renderRegisterForm.bind(this);
    this.registerUser = this.registerUser.bind(this);
  }

  registerUser(event){
    event.preventDefault();
    const registerAction = window.app_storage.api.registerAction(
      this.state.email,
      this.state.password,
      this.state.registerType,
      this.state.commerceName,
      this.state.commerceAddress,
      this.state.commerceCategory,
      this.state.commerceProvince,
      this.state.commerceLat,
      this.state.commerceLon
    );
    if (registerAction){
      registerAction.then((r) => {
        console.log("Register")
      })
    }
  }

  renderRegisterForm(){
    switch(this.state.registerType){
      case 'tutor':
        return <form className="form" onSubmit={this.registerUser} method="POST">
          <div className="field">
            <label className="label">Correo electrónico</label>
            <div className="control">
              <input type="text" className="input" onChange={(e) => {this.setState({email: e.target.value})}} value={this.state.email}/>
            </div>
          </div>
          <div className="field">
            <label className="label">Contraseña</label>
            <div className="control">
              <input type="password" className="input" onChange={(e) => {this.setState({password: e.target.value})}} value={this.state.password}/>
            </div>
          </div>
          <div className="field">
            <button className="button" type="submit">Registrarse</button>
          </div>
        </form>;
      case 'commerce':
        return <form className="form" onSubmit={this.registerUser} method="POST">
          <div className="field">
            <label className="label">Correo electrónico</label>
            <div className="control">
              <input type="text" className="input" onChange={(e) => {this.setState({email: e.target.value})}} value={this.state.email}/>
            </div>
          </div>
          <div className="field">
            <label className="label">Contraseña</label>
            <div className="control">
              <input type="password" className="input" onChange={(e) => {this.setState({password: e.target.value})}} value={this.state.password}/>
            </div>
          </div>
          <div className="field">
            <label className="label">Nombre del comercio</label>
            <div className="control">
              <input type="text" className="input" onChange={(e) => {this.setState({commerceName: e.target.value})}} value={this.state.commerceName}/>
            </div>
          </div>
          <div className="field">
            <label className="label">Dirección del comercio</label>
            <div className="control">
              <input type="text" className="input" onChange={(e) => {this.setState({commerceAddress: e.target.value})}} value={this.state.commerceAddress}/>
            </div>
          </div>
          <div className="field">
            <label className="label">Provincia</label>
            <div className="control">
              <input type="text" className="input" onChange={(e) => {this.setState({commerceProvince: e.target.value})}} value={this.state.commerceProvince}/>
            </div>
          </div>
          <div className="field">
            <label className="label">Categoría del comercio</label>
            <div className="control">
              <input type="text" className="input" onChange={(e) => {this.setState({commerceCategory: e.target.value})}} value={this.state.commerceCategory}/>
            </div>
          </div>
          <div className="field">
            <label className="label">Latitud</label>
            <div className="control">
              <input type="number" className="input" step="any" onChange={(e) => {this.setState({commerceLat: e.target.value})}} value={this.state.commerceLat}/>
            </div>
          </div>
          <div className="field">
            <label className="label">Longitud</label>
            <div className="control">
              <input type="number" className="input" step="any" onChange={(e) => {this.setState({commerceLon: e.target.value})}} value={this.state.commerceLon}/>
            </div>
          </div>
          <div className="field">
            <button className="button" type="submit">Registrarse</button>
          </div>
        </form>;
      default:
        return <form className="form" onSubmit={this.registerUser} method="POST">
          <div className="field">
            <label className="label">Correo electrónico</label>
            <div className="control">
              <input type="text" className="input" onChange={(e) => {this.setState({email: e.target.value})}} value={this.state.email}/>
            </div>
          </div>
          <div className="field">
            <label className="label">Contraseña</label>
            <div className="control">
              <input type="password" className="input" onChange={(e) => {this.setState({password: e.target.value})}} value={this.state.password}/>
            </div>
          </div>
          <div className="field">
            <button className="button" type="submit">Registrarse</button>
          </div>
        </form>;
    }
  }

  render(){
    return <div className="login-container">
      <div className="image-container logo-container">
        <img className="logo" src={logo} alt="Ava Logo" />
      </div>
      <div className="form-container register-container">
        <div className="button-list">
          <div className={`button is-large ${this.state.registerType === 'user' ? 'is-primary' : ''}`} onClick={() => {this.setState({registerType: 'user'})}}>Usuario</div>
          <div className={`button is-large ${this.state.registerType === 'tutor' ? 'is-primary' : ''}`} onClick={() => {this.setState({registerType: 'tutor'})}}>Tutor</div>
          <div className={`button is-large ${this.state.registerType === 'commerce' ? 'is-primary' : ''}`} onClick={() => {this.setState({registerType: 'commerce'})}}>Comercio</div>
        </div>
        {this.renderRegisterForm()}
      </div>
    </div>
  }
}

export default Register;