import React, { useState } from "react";
import { MDBInput } from "mdbreact";
import { Link, useLocation } from "react-router-dom";
import { AxiosAuth } from "../../../AxiosIns/AxiosAuth";
import { useNavigate } from "react-router-dom";
import { answerFetch, setSuccess } from "../../../state/reducers/answers/AnswerReudcer";
import { useDispatch } from "react-redux";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

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
    if (answer.length < 1 || answer == "") {
      console.log("answer must be have more than 20 characters");
    } else {
      console.log(answer);
      Data.append("question", id);
      Data.append("answer", answer);
      Data.append("image", image);
      AxiosAuth.post("get_answer/create-answer", Data)
        .then((response) => {
          console.log(response);
         dispatch(setSuccess(true));
          dispatch(answerFetch(id));
          setAnswer("");
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
       <CKEditor 
                    editor={ ClassicEditor }
                    data={answer}
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        setAnswer(data);
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />
      <input
        name="image"
        type="file" 
        onChange={(e) => {
          console.log(e.target.files[0]);
          setImage(e.target.files[0]);
        }}
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
