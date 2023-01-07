import React from "react";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import {Table, Form, FloatingLabel, Container, Row, Col  } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import {MdPersonSearch} from "react-icons/md"
const UserDetails = () => {
  const [page, setPage] = useState(1);
  const [users,setUsers]=useState([]);
  const [pageData, setPageData] = useState([]);
  const [filteredItems, setFilteredItems] = useState(pageData)
  const [searchInpurChanger, setSearchInpurChanger] = useState("")
  const navigateUser = useNavigate();
 
  let getUserDataFromREST = async () => {
    await axios.post("http://localhost:9000/userdetails").then((res)=>{
      let result = res.data
      console.log(result)
      setUsers(result)

    })
  };

  useEffect(() => {
    getUserDataFromREST()
  }, []);

// useEffect(()=>{
//   if(users.length > 0){
//       setFechedData(true)
//   }else{
//     setFechedData(false)
//   }
// },[users])
// console.log(fetchedData)

  const prevPageFN = () => {
    if (page === 1) {
      setPage(1);
      navigateUser("/")
    } else {
      setPage(page - 1);
    }
  };


  const nextPageFN = () => {
    if (page === 5) {
      setPage(1);
    } else {
      setPage(page + 1);
    }
  };


  useEffect(()=>{
    if (page === 1) {
    const result =  users.filter((ele)=>{
        return ele.user_Count < 11
      })
      setPageData(result);
    }else if(page===2){
      const result =  users.filter((ele)=>{
    
      return ele.user_Count>=11 && ele.user_Count<= 20 
      })
      setPageData(result);
    }else if(page===3){
      const result =  users.filter((ele)=>{
      
      return ele.user_Count>=21 && ele.user_Count<= 30
      })
      setPageData(result);
    }else if(page===4){
      const result =  users.filter((ele)=>{
      
      return ele.user_Count>=31 && ele.user_Count<= 40 

      })
      setPageData(result);
    }else if(page===5){
      const result =  users.filter((ele)=>{
      
      return ele.user_Count>=41 && ele.user_Count<= 50 
      })
      setPageData(result);
    }
     
  },[page,users])

const redirectUserToPage1 = ()=>{
  setPage(1)
}
const redirectUserToPage2 = ()=>{
  setPage(2)
}
const redirectUserToPage3 = ()=>{
  setPage(3)
}
const redirectUserToPage4 = ()=>{
  setPage(4)
}
const redirectUserToPage5 = ()=>{
  setPage(5)
}

const searchFunction = (event)=>{
  event.preventDefault();
  const data = event.target.value;
  setSearchInpurChanger(data)
  // const filteredElement = pageData.filter((ele)=>{
  //  return ele.first_Name.includes(data)
  // })
  // setPageData(filteredElement);
}
const filterFunctionOnClick = (event)=>{
  event.preventDefault();
  const filteredElement = pageData.filter((ele)=>{
    return ele.first_Name.includes(searchInpurChanger)
   })
   setFilteredItems(filteredElement);
}

useEffect(()=>{
  const filteredElement = pageData.filter((ele)=>{
    return ele.first_Name.includes(searchInpurChanger)
   })
   setFilteredItems(filteredElement);
},[searchInpurChanger,pageData]);

  return (
    <>
    <Container>
      <Row>
        <Col></Col>
        <Col><FloatingLabel
        controlId="floatingInput"
        label="Search"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Search" onChange={searchFunction} value={searchInpurChanger} />
      </FloatingLabel> </Col>
        <Col><Button onClick={filterFunctionOnClick}><MdPersonSearch/></Button></Col>
      </Row>
    </Container>
      
      <center>
      
      <Button variant="outline-secondary" onClick={prevPageFN}>
        PREV
      </Button>
      <Button variant="outline-dark" onClick={redirectUserToPage1}>1</Button>
      <Button variant="outline-dark" onClick={redirectUserToPage2}>2</Button>
      <Button variant="outline-dark" onClick={redirectUserToPage3}>3</Button>
      <Button variant="outline-dark" onClick={redirectUserToPage4}>4</Button>
      <Button variant="outline-dark" onClick={redirectUserToPage5}>5</Button>
      <Button variant="outline-secondary" onClick={nextPageFN}>
        NEXT
      </Button>
      </center>
      

      

            
           <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Number</th>
          <th>DOB</th>
        </tr>
      </thead>
      <tbody>
     {
      filteredItems.map((ele)=>{
        return(
          <>
          <tr>
          <td>{ele.user_Count}</td>
          <td>{ele.first_Name}</td>
          <td>{ele.last_Name}</td>
          <td>{ele.user_Email}</td>
          <td>{ele.user_Number}</td>
          <td>{ele.user_Dob}</td>
        </tr>
        </>
        )
      })
     }
      </tbody>
    </Table>
            
        
        
    
    </>
  );
};

export default UserDetails;
