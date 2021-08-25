import React from "react";
import Home from './component/Home';
import Adduser from "./component/adduser";
import Edituser from "./component/edituser"
import { Container,Navbar,Nav,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import './App.css';


function App() {
  return (
    <Router>
<div>
<Navbar bg="primary" variant="dark" className="mb-4">
  <Container>
<Nav className="mr-auto">
 <Nav>
<Nav>
<Link className="nav-link" to="/">Home</Link>
</Nav>
<Nav>
<Link className="nav-link" to="/adduser">Add User</Link>
</Nav>
 </Nav>
</Nav>
</Container>
</Navbar> 
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      
        <Route path="/adduser">
          <Adduser/>
        </Route>
        <Route path="/edituser/:id">
          <Edituser/>
        </Route>
      </Switch>   
    </div>
  </Router>
  );
}

export default App;


