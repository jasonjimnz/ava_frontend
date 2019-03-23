import request from 'superagent';

class Api{
  constructor(debug){
    if (debug){
      this.baseUrl = 'http://192.168.137.1:5000';
    } else {
      this.baseUrl = 'http://192.168.137.1:5000';
    }
  }

  loginAction(email, password){
    const loginUrl = `${this.baseUrl}/login`;
    return request.post(loginUrl)
      .send({
        email: email,
        password: password
      })
      .type('application/x-www-form-urlencoded')
      .then((r) => {
        return r.body;
      })
      .catch((e) => {
        return null;
      });
  }

  registerAction(email, password, role, commerceName, commerceAddress, commerceCategory, commerceProvince, commerceLat, commerceLon){
    if (!email || !password || !role)
      return null;
    const registerUrl = `${this.baseUrl}/register`;
    return request.post(registerUrl)
      .send({
        email: email,
        password: password,
        role: role,
        commerce_name: commerceName,
        address: commerceAddress,
        category: commerceCategory,
        province: commerceProvince,
        lat: commerceLat,
        lon: commerceLon
      })
      .type('application/x-www-form-urlencoded')
      .then((r) => {
        return r.body;
      })
      .catch((e) => {
        return null;
      });
  }

  taskListAction(token, lat,lon){
    const taskListUrl = `${this.baseUrl}/request/list`;
    return request.post(taskListUrl)
      .send({
        token: token,
        lat: lat,
        lon: lon
      })
      .type('application/x-www-form-urlencoded')
      .then((r) => {
        return r.body;
      })
      .catch((e) => {
        return null;
    })
  }

  acceptTask(token, request_id){
    if (!token || !request_id)
      return null;
    const acceptTaskUrl = `${this.baseUrl}/request/${request_id}/do`;
    return request.post(acceptTaskUrl)
      .send({
        token: token
      })
      .type('application/x-www-form-urlencoded')
      .then((r) => {
        return r.body;
      })
      .catch((e) => {
        return null;
      })
  }
}

export default Api;