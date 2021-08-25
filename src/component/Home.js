
import React, {useState, useEffect} from 'react';
import { Container,Table,Button } from "react-bootstrap";
import {Link} from "react-router-dom";


function Home() {
  let [users,  setUsers] = useState(null)

  useEffect(() => {
    getData();
   
  }, []);
   // we will use async/await to fetch this data
   async function getData() {
    const response = await fetch("http://localhost:3004/users");
    const data = await response.json();

    // store the data into our books variable
    setUsers(data) ;
  }
  async function deleteData(id) {
   console.log(id);
   await fetch(`http://localhost:3004/users/${id}`, { method: 'DELETE' });
   getData();

  }


  return (
<div>
  <Container className="tablePadding">
<Table striped bordered hover responsive>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Email</th>
      <th>Action</th>
    
    </tr>
  </thead>
  <tbody>

 
  
    
        {users && users.map((user, index) => (
          <tr key={index}>
           
            <td>{user.id}</td>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.email}</td>
      <td>
      <Link to={`/edituser/${user.id}`} className="btn btn-outline-primary mr-2">Edit 
      </Link>
     
       <Button variant="outline-danger" onClick={()=>deleteData(user.id)}>Delete</Button>{' '}
      </td>
    
          </tr>
        ))}

</tbody>
</Table>
</Container>
</div>


  );
}

export default Home;

