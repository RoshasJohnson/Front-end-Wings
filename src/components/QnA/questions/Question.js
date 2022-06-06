import { Box, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import { width } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Stack from '@mui/material/Stack';
import { Link, useNavigate } from "react-router-dom";
import SideBar from "../../homepage/SideBar";
import Answers from "../answers/Answers";
import Allquestions from "./Allquestions";
import Topicswise from "./Topicswise";
import { useSelector } from "react-redux";
import AXIOS from "../../../axios";

function Question() {
  const [topics, setTopics] = useState([])
  console.log(topics,"Lets check for if it include id");
  useEffect(() => {
    AXIOS.get(`topics`).then((res) => {
      const data = res.data;
      setTopics(data)

    });
  }, []);
  const loginStatus = useSelector((state) => state.userAuth.loginStatus);
  const navigate = useNavigate();

  return (
    <div className="homepage">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={0} md={3}>
            <SideBar />
          </Grid>
          <Grid item xs={12} md={8}>
          <Stack direction="row"spacing={2}>
          <Button
              style={{
                width: "fit-content",
                marginTop: "10%",
                backgroundColor: "rgb(255, 206, 0)",
                color: "black",
              }}
              variant="contained"
              onClick={(e) => {
               navigate("/ask-question")
              }}
            >
              Ask Question
            </Button>
            <Button
              style={{
                width: "fit-content",
                marginTop: "10%",
                float: 'right',
              
                backgroundColor: "rgb(255, 206, 0)",
                color: "black",
              }}
              variant="contained"
              onClick={(e) => {
                navigate("/my-question")
               }}
            
            >
            My questions
            </Button>
 
</Stack>
           
            <Allquestions />
          </Grid>
          <Grid item xs={0}  md={1}>
            <Topicswise data = {topics} />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Question;
