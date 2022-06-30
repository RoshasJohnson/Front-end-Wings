import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { AxiosAuth } from "../../../AxiosIns/AxiosAuth";

function AdminDashboard() {
  const[data,setData] = useState({});
  
 useEffect(() => {
  AxiosAuth.get("adminpanel/get_statistics")
    .then((res) => {
      console.log(res.data,'====');
      setData(res.data);
    }
    )
    .catch((err) => {

      console.log(err);
    }
    );
  }, []);

  // console.log(user_count,'---f');

  return (
    <div className="mt-5">
      <h1>Dashboard</h1>
      <div className="d-flex m-4" md={3}>

        <Card className="m-2" style={{ width: "20rem" }}>
          <Card.Body>
            <Card.Title style={{ color: "blue" }}> Total Users{data.users_count}</Card.Title>
          </Card.Body>
        </Card>
        <Card   className="m-2"  style={{ width: "20rem" }}>
          <Card.Body>
            <Card.Title style={{ color: "blue" }}>Total Questions {data.question_count}</Card.Title>
          </Card.Body>
        </Card>
        <Card  className="m-2"  style={{ width: "20rem" }}>
          <Card.Body>
            <Card.Title style={{ color: "blue" }}> Total Users 100</Card.Title>
          </Card.Body>
        </Card>
        <Card  className="m-2"  style={{ width: "20rem" }}>
          <Card.Body>
            <Card.Title style={{ color: "blue" }}> Total Users 100</Card.Title>
          </Card.Body>
        </Card>
        
      </div>
    </div>
  );
}

export default AdminDashboard;
