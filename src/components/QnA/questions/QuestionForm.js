import React, { useEffect, useState } from "react";
import "./Allquestion.css";
import { MDBInput } from "mdbreact";
import Select from "react-select";
import Alert from "@mui/material/Alert";
import { AxiosAuth } from "../../../AxiosIns/AxiosAuth";
import { useNavigate } from "react-router-dom";

function QuestionForm() {
  const navigate = useNavigate()
  const [error, setError] = useState({
    titleError: "",
    questionError: "",
    topicError: "",
  });
  const [details, setDetails] = useState({
    title: "",
    question: "",
    topic: "",
    image: "",
  });
  const handleChange = (selectedOption) => {
    setDetails({ ...details, topic: selectedOption.value });
  };

  let topics = localStorage.getItem("topics");
  if (topics) {
    topics = JSON.parse(topics);
  }

  const options = topics.map((obj) => {
    return { value: obj.topics, label: obj.topics };
  });

  const formData = new FormData();

  const formSubmit = (e) => {
    e.preventDefault();
    console.log(details);
    function check_details() {
      if (details.title == "" || details.title.length < 15) {
        setError({
          ...error,
          titleError: "Title must be have more than 15 characters",
        });
      }
      if (details.question == "" || details.question.length < 30) {
        setError({
          ...error,
          questionError: "Title must be have more than 30 characters",
        });
      }
      if (details.topic.length < 0) {
        setError({
          ...error,
          topicError: "Title must be have more than 15 characters",
        });
      }
    }

    console.log("worked");
    formData.append("question_title", details.title);
    formData.append("question", details.question);
    formData.append("topic", details.topic);
    formData.append("image", details.image);
    console.log("worked log");


    AxiosAuth.post("questions/create-question",formData)
      .then((response) => {
        console.log(response);
        navigate("/your-questions")
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="questionForm">
      <form onSubmit={formSubmit}>
        <label style={{ color: "black" }} htmlFor="dfsd">
          <p>Title</p>
        </label>
        <MDBInput
          name="question_title"
          onChange={(e) => setDetails({ ...details, title: e.target.value })}
          type="textarea"
          rows="2"
        />
        <label style={{ color: "black" }} htmlFor="">
          Question Topic
        </label>

        <Select
          required
          name="topicwise"
          isMultivalue={details.topic}
          onChange={handleChange}
          options={options}
        />

        <label style={{ color: "black" }} htmlFor="">
          Write your question
        </label>
        <MDBInput
          name="question"
          onChange={(e) => setDetails({ ...details, question: e.target.value })}
          type="textarea"
          rows="7"
        />
        <input
          name="image"
          type="file"
          onChange={(e) => setDetails({ ...details, image: e.target.value })}
          multiple
          accept="image/*"
        />
        <input
          style={{ backgroundColor: "yellow" }}
          type="submit"
          value="Upload"
        />
      </form>
    </div>
  );
}

export default QuestionForm;
