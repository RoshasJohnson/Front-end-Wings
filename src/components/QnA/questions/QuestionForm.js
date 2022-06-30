import React, { useEffect, useState, useRef } from "react";
import "./Allquestion.css";
import { MDBInput } from "mdbreact";
import Select from "react-select";
import Alert from "@mui/material/Alert";
import { AxiosAuth } from "../../../AxiosIns/AxiosAuth";
import { useNavigate } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { setSuccess } from "../../../state/reducers/questions/questionReducer";
import { useDispatch } from "react-redux";


function QuestionForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // =====================================
  const [error, setError] = useState({
    titleError: "",
    questionError: "",
    topicError: "",
  });
  const [convertedText, setConvertedText] = useState("Some default content");
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const config = {
    readonly: false,
    height: 400,
  };
  // =====================================
  const [details, setDetails] = useState({
    title: "",
    question: content,
    topic: "",
    image: "",
  });
  // =====================================

 console.log(details.question);
  // const handleUpdate = (event) => {
  //   const editorContent = event.target.innerHTML;
  //   setContent(editorContent);
  // };
  // =====================================
  const handleChange = (selectedOption) => {
    setDetails({ ...details, topic: selectedOption.value });
  };
  // =====================================

  let topics = localStorage.getItem("topics");
  if (topics) {
    topics = JSON.parse(topics);
  }
  // =====================================
  const options = topics.map((obj) => {
    return { value: obj.topics, label: obj.topics };
  });
  // =====================================
  const formData = new FormData();

  const formSubmit = (e) => {
    e.preventDefault();
    console.log(details);
    function check_details() {
      if (details.title === "" || details.title.length < 15) {
        setError({
          ...error,
          titleError: "Title must be have more than 15 characters",
        });
      }
      if (details.question === "" || details.question.length < 30) {
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
    // =====================================
    console.log("worked");
    formData.append("question_title", details.title);
    formData.append("question", details.question);
    formData.append("topic", details.topic);
    formData.append("image", details.image);
    console.log("worked log");
    // =====================================
    AxiosAuth.post("questions/create-question", formData)
      .then((response) => {
        console.log(response);
        navigate("/my-question");
        dispatch(setSuccess(true));
        
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
        <CKEditor
          editor={ClassicEditor}
          data="<p></p>"
          config = {config}
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
            console.log("Editor is ready to use!", editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            (setDetails({...details, question: data }))
            console.log(details
              .question);
          }}
          onBlur={(event, editor) => {
            console.log("Blur===============.", editor);
          }}
          onFocus={(event, editor) => {
            console.log("Focus.===================", editor);
          }}
          style = {{minHeight:"100px"}}
        />
        <input
          name="image"
          type="file"
          onChange={(e) => setDetails({ ...details, image: e.target.files[0] })}
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
