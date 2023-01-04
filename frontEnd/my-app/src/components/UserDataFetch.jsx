import React from "react";
import { Table, Button } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";

export default function UserDataFetch() {
  const [userData, setUserData] = useState([]);

  const clickFunction = async (event)=>{
      event.preventDefault();

        const userDataArry = [];

      for(let i=0; i<51 ; i++){
       await axios.get("https://randomuser.me/api", {
          dataType:"json"
        }).then(async(res)=>{
          const userDetails = await res.data.results;
          userDetails.forEach(element => {
            userDataArry.push(element) 
          });
            
        }).catch((err)=>{
          throw err
        })
      }
       setUserData(userDataArry);

      if(userDataArry.length > 0){
       await axios.post("http://localhost:9000/userdata", userDataArry).then((res)=>{
          
        }).catch((err)=>{
          throw err
        })
      }
      

  }
  console.log(userData,"usestae wala");
  return (
    <>
      <br />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Larry the Bird</td>
            <td>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table> <br />
      <Button variant="outline-secondary" onClick={clickFunction}>Fetch Users</Button> &nbsp; &nbsp; &nbsp;
      <Button variant="outline-danger">Delete Users</Button> &nbsp; &nbsp; &nbsp;
      <Button variant="outline-success">User Details</Button>
    </>
  );
}
