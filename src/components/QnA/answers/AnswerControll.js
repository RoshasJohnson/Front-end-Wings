import React, { useState } from "react";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import "./answer.css";



function AnswerControll() {
  const [vote, setVote] = useState(false);
  const [answer, setAnswer] = useState(false);
  return (
    <div className="ansControll">
       <span class="vote-answer">Vote the answer</span>
      <FileUploadIcon
        onClick={() => {
          setVote(!vote);
        }}
        className= {vote ? "votedIcon" : "voteIcon"}
      />
      <span class="pic-answer">Pick the answer</span>
      <CheckCircleOutlineIcon
        onClick={() => {
          setAnswer(!answer);
        }
        }
        className={answer ? "checkdIcon" : "checkIcon"}
       />
    </div>
  );
}

export default AnswerControll;
