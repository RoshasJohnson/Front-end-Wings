
import React, { useEffect } from "react";

import { useLocation } from "react-router-dom";
import SideBar from "../../homepage/SideBar";
import "./eachQuesitonAndanswer.css";
import { Link } from "react-router-dom";
import Answers from "../answers/Answers";
import Grid from '@mui/material/Grid';
import { Box } from "@mui/system";
function EachQuestions() {
  const location = useLocation();
  const data = location.state;
  console.log(data, "sdfsdfdsfdsfdsfdsafasdfadsfadsf");
  useEffect(() => {}, []);
  return (
    <Box sx={{ width: '100%' }}>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={2}>
      <SideBar/>
      </Grid>
      <Grid item xs={8}>
      <h1>flsfj</h1>
      </Grid>
      <Grid item xs={6}>
    
      </Grid>
      <Grid item xs={6}>
      
      </Grid>
    </Grid>
  </Box>
  );
}

export default EachQuestions;
