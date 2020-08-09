import React, { Component } from 'react';
import axios from 'axios';

export default class Createdriver extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeReg = this.onChangeReg.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      vehicleregnumber: '',
      location: {},
    }
  }

  componentDidMount() {
console.log('mounted')
  }

  onChangeUsername(e) {
    this.setState({
      name: e.target.value
    })
  }

  onChangeReg(e) {
    this.setState({
        vehicleregnumber: e.target.value
    })
  }


  onSubmit(e) {
    e.preventDefault();

    const driver = {
      name: this.state.name,
      vehicleregnumber: this.state.vehicleregnumber,
    }

    console.log(driver);

    axios.post('http://localhost:5000/api/v1/driver/', driver)
      .then(res => console.log(res.data))
      .catch(err=>console.log(err,'error'));

    window.location = '/drivers';
  }

  render() {
    return (
    <div>
      <h3>Register Driver</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Username: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeUsername}
              />
        </div>

        <div className="form-group"> 
          <label>Vehicle Reg #: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.vehicleregnumber}
              onChange={this.onChangeReg}
              />
        </div>

        <div className="form-group">
          <input type="submit" value="Register" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}