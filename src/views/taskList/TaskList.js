import React, {Component} from 'react';
import {Redirect, withRouter} from "react-router-dom";
import styles from './styles.scss';

class TaskList extends Component{
  constructor(props){
    super(props);
    this.state = {
      requests: [],
      selectedTask: null,
      taskApproved: false
    };
  }

  componentDidMount(){
    const taskList = window.app_storage.api.taskListAction(window.app_storage.data.token, "40.44793", "-3.72236");
    if (taskList){
      taskList.then((r) => {
        if (r)
          this.setState({requests: r['requests']})
      })
    }
  }

  renderTaskList(){
    return <table className="table" style={{backgroundColor:'inherit'}}>
      <thead>
        <tr>
          <th>Tarea</th>
          <th>Descripción</th>
          <th>Distancia</th>
        </tr>
      </thead>
      <tbody>
      {this.state.requests.map((e) => {
        return <tr onClick={ () => {this.setState({selectedTask: e.request_id})}}
        className={this.state.selectedTask === e.request_id ? 'selected': ''}>
          <td>{e.request_id}</td>
          <td>{e.request_content}</td>
          <td>{e.distance}</td>
        </tr>
      })}
      </tbody>
    </table>
  }

  render(){
    if (!window.app_storage.data.token)
      return <Redirect to="/login" />;
    if (this.state.taskApproved)
      return <Redirect to="/" />;
    return <div className="login-container">
      <div className="task-list-container">
        {this.renderTaskList()}
        <div>
          <button onClick={(e) => {
            const task = window.app_storage.api.acceptTask(
              window.app_storage.data.token,
              this.state.selectedTask
            );
            if (task){
              task.then((r) => {
                if (r)
                  this.setState({taskApproved: true})
              })
            }
          }}>Realizar recado</button>
        </div>
      </div>
    </div>
  }
}

export default withRouter(TaskList);