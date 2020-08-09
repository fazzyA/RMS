import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Driver = props => (
  <tr>
    <td>{props.exercise.name}</td>
    <td>{props.exercise.vehicleregnumber}</td>
    <td>{props.exercise.location}</td>
    <td>
      <Link to={"/edit/"+props.exercise._id}>edit</Link> | <a href="#" onClick={() => { props.deleteDriver(props.exercise._id) }}>delete</a>
    </td>
  </tr>
)

export default class DriverList extends Component {
  constructor(props) {
    super(props);

    this.deleteDriver = this.deleteDriver.bind(this)

    this.state = {mydrivers: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/v1/driver/')
      .then(response => {
        this.setState({ mydrivers: response.data })
      })
      .catch((error) => {
        console.log(error);
        console.log('no drivers fetched');
      })
  }

  deleteDriver(id) {
    axios.delete('http://localhost:5000/api/v1/driver/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      exercises: this.state.exercises.filter(el => el._id !== id)
    })
  }

  driverList() {
    return this.state.mydrivers.map(currentexercise => {
      return <Driver exercise={currentexercise} deleteDriver={this.deleteDriver} key={currentexercise._id}/>;
    })
  }

  render() {
    return (
      <div>
        {/* <h3>...............</h3> */}
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Vehicle registration number</th>
              <th>Location</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            { this.driverList() }
          </tbody>
        </table>
      </div>
    )
  }
}