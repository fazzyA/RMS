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
      location: 0,
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
      name: this.state.username,
      vehicleregnumber: this.state.description,
      location: this.state.location,
    }

    console.log(driver);

    axios.post('http://localhost:5000/api/v1/driver/', driver)
      .then(res => console.log(res.data));

    window.location = '/';
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
              value={this.state.reg}
              onChange={this.onChangeReg}
              />
        </div>

        <div className="form-group">
          <input type="submit" value="Create driver Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}