import React from "react";
import "./eachQuesitonAndanswer.css";
import { Link, useLocation } from "react-router-dom";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Moment from "moment";
import { Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
function OneQuestion() {
  const location = useLocation();
  const {
    state: {
      data: {
        question,
        question_title,
        question_topic,
        attached_file,
        questioner,
        created_at,
        
      },
    },
  } = location;
console.log(location.state);
  const formatDate = Moment(created_at).format("DD-MM-YYYY");

  return (
    <div className="one_qna">
      <Card style={{ padding: "10px" }}>
        <Stack direction={"row"} spacing={2}>
          <Avatar src={questioner.avatar}/>
          <Link to ={`/${questioner.username}`}>
            <p>{questioner.fullname}</p>
          </Link>

        </Stack>
        <Typography style={{float:"right"}} variant="body2" color="text.dark">
                asked in :   {formatDate} 
                </Typography> 
        <h2>{question_title}</h2>
        <Typography
          style={{ whiteSpace: "pre-wrap", background: "rgb(239, 235, 235)" }}
        >
          {question}
        </Typography>

        {attached_file ? (
          <CardMedia
            component="img"
            height="194"
            image={attached_file}
            alt="Paella dish"
          />
        ) : (
          ""
        )}
        <Link to={`/questions/topic/${question_topic.topics}`}  state={{ data: "topic" }}  >
          <p
            style={{
              margin: "1%",
              background: "rgb(236, 227, 227)",
              width: "fit-content",
            }}
          >
            {question_topic.topics}
          </p>
        </Link>
      </Card>
    </div>
  );
}

export default OneQuestion;
