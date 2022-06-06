import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import axios from "../../../axios";
import SideBar from "../../homepage/SideBar";
import Card from "@mui/material/Card";
import { useDispatch, useSelector } from "react-redux";
import { questionFetch } from "../../../state/reducers/questions/questionReducer";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Topicswise from "./Topicswise";

function TopicwiseQuestins() {
  const data = useLocation();
  const [loading, setLoading] = useState(false)
  const id = data.state.id;
  const [topics, setTopics] = useState();
  console.log(topics, "blaba");
  useEffect(() => {
    setLoading(true)
    axios
      .get(`questions/topic-wise/${id}/`)
      .then((res) => {
        setTopics(res.data.topicWise);
        setLoading(false)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="homepage">
     
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={0} md={3}>
            <SideBar />
            </Grid>
          <Grid item xs={12} md={8}>
          <Row style={{ marginTop: "10%" }}>
            <h6>{data.state.data} </h6>
            <Col>  {loading && <Spinner variant="warning" animation="border" />}</Col>
            { topics ? topics.map((topic)=>
            <Card justify="space-between" style={{ height: "fit-content", marginTop: "1%"  }}>
                <CardContent>
                  <Typography variant="h6" color="text.dark">
                    <Link
                      to={`/questions/${topic.question_title}`}
                      state={{ data: topic}}
                    >
                      {topic.question_title}
                    </Link>
                  </Typography>
                </CardContent>
         
              </Card>
              ):""}

          </Row>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default TopicwiseQuestins;
