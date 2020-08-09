import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import DriverList from "./components/List";
import Createdriver from "./components/create";
import Editdriver from "./components/Edit";
import Navbar from './components/Navbar'

function App() {
  return (
<Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={Createdriver} />
      <Route path="/drivers" exact component={DriverList} />
      <Route path="/edit/:id" exact component={Editdriver} />
      </div>
    </Router>
      );
}

export default App;
