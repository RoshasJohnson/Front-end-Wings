import { Box, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import { width } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import SideBar from "../../homepage/SideBar";
import Answers from "../answers/Answers";
import Allquestions from "./Allquestions";
import Topicswise from "./Topicswise";
import { useSelector } from "react-redux";
import AXIOS from "../../../axios";

function Question() {
  const [topics, setTopics] = useState([])
  useEffect(() => {
    AXIOS.get(`topics`).then((res) => {
      const data = res.data;
      setTopics(data)
      console.log(data);

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
            <Button
              style={{
                marginTop: "10%",
                backgroundColor: "rgb(255, 206, 0)",
                color: "black",
              }}
              variant="contained"
              onClick={(e) => {
                loginStatus ? navigate("/ask-question") : navigate("/");
              }}
            >
              Ask Question
            </Button>
            <Allquestions />
          </Grid>
          <Grid item xs={3} md={3}>
            <Topicswise data = {topics} />
          </Grid>
          <Grid item xs={6} md={8}></Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Question;
