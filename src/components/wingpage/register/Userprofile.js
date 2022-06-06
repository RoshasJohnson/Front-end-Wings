import { Grid } from "@mui/material";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./signpage.css";
import Signup from "./Signup";
import UserTopic from "./UserTopic";
function Userprofile() {
  const [Details, setDetails] = useState({ fname: "", lname: "", avatar: "" });

  // Add code here to upload file to server
  // ...

  return (
    <div className="">
       <Container style={{marginTop:"7%"}}>
         
         <UserTopic/>

       </Container>
    </div>
  );
}

export default Userprofile;
