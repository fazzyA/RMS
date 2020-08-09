import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Driver = props => (
  <tr>
    <td>{props.drivr.name}</td>
    <td>{props.drivr.vehicleregnumber}</td>
    {/* <td>{props.drivr.location}</td> */}
    <td>
      <Link to={"/edit/"+props.drivr._id}>edit</Link> | <a href="#" onClick={() => { props.deleteDriver(props.drivr._id) }}>delete</a>
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
          console.log('faiza',response.data.data)
         this.setState({ mydrivers: response.data.data })

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
    return this.state.mydrivers.map(current => {
      return <Driver drivr={current} deleteDriver={this.deleteDriver} key={Math.random}/>;
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
            { this.state.mydrivers.map(current => {
                return <Driver drivr={current} deleteDriver={this.deleteDriver} key={current._id}/>;
             }) 
             }
          </tbody>
        </table>
      </div>
    )
  }
}