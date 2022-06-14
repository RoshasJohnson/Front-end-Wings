import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import SideBar from "../../homepage/SideBar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {Col, Row, Spinner } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { AxiosAuth } from "../../../AxiosIns/AxiosAuth";
import { useDispatch, useSelector } from "react-redux";
import { setSuccess } from "../../../state/reducers/questions/questionReducer";
import AlertMessage from "../../context/AlertMessage";


function MyQuestions() {
  const [alert, setAlert] = useState(false);
  const [question, setQuestion] = useState();
  const success   = useSelector((state) => state.fetchQuestions.success);
  const dispatch = useDispatch();
  useEffect(() => {
    AxiosAuth.get("questions/my-question")
      .then((res) => {
        setQuestion(res.data.MyQuestions);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


const handleShow = () => setAlert(true);
const handleClose = () =>{ 
setAlert(false);
  dispatch(setSuccess(false));
}

useEffect(() => {
  if (success) {  
    handleShow();
  }

}
, [success]);

setTimeout(() => {  
  handleClose()  // this will hide the alert after 3 seconds   
} , 3000); // 3000ms = 3s 



  return (
    <div className="homepage">
 
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={0} md={3}>
        
            <SideBar />
          </Grid>
          <Grid item xs={12} md={8}>

            <Row style={{ marginTop: "10%" }}>
            {alert && <AlertMessage handleClose = {handleClose} message = "Question added"/>}
              <Col>
                {" "}
                {/* {loading && <Spinner variant="warning" animation="border" />} */}
              </Col>

              {question
                ? question.map((topic) => (
                    <Card
                      justify="space-between"
                      style={{ height: "fit-content", marginTop: "1%" }}
                    >
                      <CardContent>
                        <Typography variant="h6" color="text.dark">
                          <Link
                            to={`/questions/${topic.question_title}`}
                            state={{ data: topic }}
                          >
                            {topic.question_title}
                          </Link>
                        </Typography>
                      </CardContent>

                    </Card>
                  ))
                : ""}
            </Row>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default MyQuestions;
