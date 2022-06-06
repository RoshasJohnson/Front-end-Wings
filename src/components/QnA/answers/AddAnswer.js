import React, { useState } from "react";
import { MDBInput } from "mdbreact";
import { Link, useLocation } from "react-router-dom";
import { AxiosAuth } from "../../../AxiosIns/AxiosAuth";
import { useNavigate } from "react-router-dom";
import { answerFetch } from "../../../state/reducers/answers/AnswerReudcer";
import { useDispatch } from "react-redux";

function AddAnswer() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [image, setImage] = useState("");
  const [answer, setAnswer] = useState("");
  const location = useLocation();
  const id = location.state.data.id;
console.log(image);
 // =======================================
  const Data = new FormData();
  const ansSubmit = (e) => {
    if (answer.length < 20 || answer == "") {
      console.log("answer must be have more than 20 characters");
    } else {
      console.log(answer);
      Data.append("question", id);
      Data.append("answer", answer);
      Data.append("image", image);
      AxiosAuth.post("get_answer/create-answer", Data)
        .then((response) => {
          console.log(response);
          setAnswer("");
          dispatch(answerFetch(id));
          //   navigate(`${path}`);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

 // =======================================
  return (
    <div style={{ marginTop: "10%" }}>
      <h6>Write your answer</h6>
      <MDBInput
        name="question"
        onChange={(e) => setAnswer(e.target.value)}
        type="textarea"
        rows="7"
        value={answer}
      />
      <input
        name="image"
        type="file"
        onChange={(e) =>{
          console.log(e.target.files[0]);
           setImage(e.target.files[0]);}}
        multiple
        accept="image/*"
      />
      <button onClick={ansSubmit} style={{ backgroundColor: "yellow" }}>
        Upload
      </button>
    </div>
  );
}

export default AddAnswer;
