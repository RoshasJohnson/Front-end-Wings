import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { AxiosAuth } from "../../AxiosIns/AxiosAuth";
import Modal from 'react-bootstrap/Modal'
import axios from "../../axios";
import Avatar from '@mui/material/Avatar';
function UserTable() {
  const [state,setState] = useState(false)
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);
  const [deleteshow, setDeleteShow] = useState(false);
  const [userId,setuserId] = useState()
  const handleClose = () => setShow(false);
  const handleDeleteClose = () => setDeleteShow(false);

function handleShow (id){
    setuserId(id)
     setShow(true);
  }


const handleChangeStatus =()=>{
  AxiosAuth.put(`adminpanel/editstatus/${userId && userId}`)
    .then((res=>{
      console.log(res.data)
      setShow(false);
      setState(!state)

    })).catch(err=>{
      console.log(err);
    }
    )}  



  const deleteAlert = (id) => { 
    console.log(id)
    setuserId(id)
    setDeleteShow(true);
  }
  const handleDelete = ()=>{
    AxiosAuth.delete(`adminpanel/deleteuser/${userId && userId}`)
    .then((res=>{
      console.log(res.data)
      setDeleteShow(false);
      setState(!state)
    }
    )).catch(err=>{
      console.log(err);
    }
    )
  }    

    
  useEffect(() => {
    AxiosAuth.get("adminpanel/getuser")
      .then(res => {
        setUsers(res.data)
      }
      )
      .catch(err => {
        console.log(err);
      });
  }, [state])

  return (
    <div style={{ marginTop: "9%" }}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>Avatar</th>
            <th>Full Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Followers</th>
            <th>Following</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {users && users.map(user => (
            <> 
            <tr>
            <td key={user.id} >{user.id}</td>
            <td> <Avatar alt={user.avatar} src={user.avatar} /></td>
            <td>{user.fullname}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.follows.length}</td>
            <td>7</td>
            {user.status?<td 
            onClick={()=>{
              handleShow(user.id)
            }}
            style={{color:"green",cursor:"pointer"}}>Active</td>:<td
            onClick={()=>{
              handleShow(user.id)
            }}
             style={{color:"red",cursor:"pointer"}}>Inactive</td>}
         
            {/* <td  
            onClick={()=>{
              deleteAlert(user.id)
            }
            }

             style={{color:"red",cursor:"pointer"}}>Dleete</td> */}
          </tr>
          </>
          ))}
         
        </tbody>
      </Table>

      <Modal style={{marginTop:"10%"}} show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>Are you sure ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          <Button variant="primary" onClick={handleChangeStatus}>
            Yes 
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal   style={{marginTop:"10%"}} show={deleteshow} onHide={handleDeleteClose}>
        <Modal.Header closeButton>

        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this user?</Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleDeleteClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default UserTable;
