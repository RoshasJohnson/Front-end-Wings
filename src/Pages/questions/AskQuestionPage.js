import { Box, Grid } from '@mui/material'
import React, { useEffect } from 'react'
import SideBar from '../../components/homepage/SideBar'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import QuestionForm from '../../components/QnA/questions/QuestionForm';

function AskQuestionPage() {
    const navigate = useNavigate();
    const user = useSelector((state) => state.loginStatus);
     console.log(user,"user status")
    useEffect(() => {
   
    }, [])
  return (
    <div className="homepage">
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={0} md={3}>
          <SideBar />
        </Grid>
        <Grid item xs={12} md={8}> 
        <QuestionForm/>
        </Grid>
        <Grid item xs={3} md={3}>
        </Grid>
        <Grid item xs={6} md={8}>
        </Grid>
      </Grid>
    </Box>
  </div>
  )
}

export default AskQuestionPage