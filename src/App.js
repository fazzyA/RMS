import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import DriverList from "./components/List";
import Createdriver from "./components/create";
import Navbar from './components/Navbar'

function App() {
  return (
<Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={Createdriver} />
      </div>
    </Router>
      );
}

export default App;
