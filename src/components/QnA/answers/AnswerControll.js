import React, { useEffect, useState } from "react";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import "./answer.css";
import { AxiosAuth } from "../../../AxiosIns/AxiosAuth";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import ReportIcon from "@mui/icons-material/Report";
import { Button, Form, Modal } from "react-bootstrap";

function AnswerControll({ ans }) {
  const [vote, setVote] = useState(false);

  const questioner = useLocation().state.data.questioner.id;
  const question = useLocation().state.data.id;
  const [ansPicked, setAnsPicked] = useState(false);

  const user = useSelector((state) => state.userAuth.userData.user.id);
  let voteCount = ans.voteCount;
  const [voteCounts, setVoteCounts] = useState(ans.voteCount);
  const rig_answer = useLocation().state.data.right_answer;
  const [rightAnswer, setRightAnswer] = useState(false);
  const[reason,setReason] = useState("")
  const handleVote = () => {
    AxiosAuth.put("get_answer/vote", {
      answer: ans.id,
    })
      .then((res) => {
        setVote(!vote);
        setVoteCounts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSelectAnswer = () => {
    AxiosAuth.put("questions/select_answer", {
      answer: ans.id,
      question: question,
    })
      .then((res) => {
        setAnsPicked(!ansPicked);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    if (ans.vote.includes(user)) {
      setVote(true);
    }
  }, [vote]);

  useEffect(() => {
    console.log();
    if (rig_answer > 0) {
      setRightAnswer(true);
    }
  }, [ansPicked]);

  function handleReport(id) {
    const data = new FormData();
    data.append("reported_item", "answer");
    data.append("report_item_id", id);
    data.append("question", question);
    data.append("reason", reason);
    console.log(data);

    AxiosAuth.post("report/answer", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="ansControll">
      <FileUploadIcon
        onClick={handleVote}
        className={vote ? "votedIcon" : "voteIcon"}
      />
      <span style={{ color: "gray" }}>{voteCounts}</span>

      {questioner === user || rightAnswer ? (
        <CheckCircleOutlineIcon
          onClick={handleSelectAnswer}
          className={
            ansPicked || rig_answer === ans.id ? "checkdIcon" : "checkIcon"
          }
        />
      ) : null}

      <ReportIcon
        onClick={() => {
          handleShow();
        }}
        className="reportbtn"
        style={{ marginLeft: "2%" }}
      />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>Are you want report this answer</Modal.Body>
        <Form.Control
          as="textarea"
          placeholder="Leave the reason for report"
          onChange={(e)=>{
            setReason(e.target.value)
          }}
          style={{ height: "100px" }}
        />
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleReport(ans.id);
              handleClose();
            }}
          >
            Report
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AnswerControll;
