import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AXIOS from "../../../axios";
import Select from "react-select";
import Avatar from "@mui/material/Avatar";
import { MDBInput } from "mdbreact";
import { AxiosAuth } from "../../../AxiosIns/AxiosAuth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setData } from "../../../state/reducers/auth/userauth";
import "./signpage.css";


function UserTopic() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  // =====================================
  const [error, setError] = useState({
    titleError: "",
    questionError: "",
    topicError: "",
  });
  // =====================================
  const [options, setOptions] = useState([]);
  // =====================================
  const [details, setDetails] = useState({
    image: "",
    FName: "",
    LName: "",
    bio: "",
  });
  // =====================================
  const [Topic, setTopic] = useState([]);
  // =====================================
  const handleChange = (selectedOption) => {
    selectedOption.map((item) => {
      console.log(Topic); 
      setTopic([...Topic, item.value]);
    });
  };
  // =====================================

  useEffect(() => {
    AXIOS.get("topics").then((res) => {
      const topicsData = res.data.topics;

      const topicOption = topicsData.map((obj) => {
        return { value: obj.topics, label: obj.topics };
      });
      setOptions(topicOption);
    });
  }, []);
  // =====================================
  const formData = new FormData();
  const formSubmit = (e) => {
    e.preventDefault();
    console.log(details);
  // =====================================
    // function check_details() {
    //   if (details.fName == "") {
    //     setError({
    //       ...error,
    //       titleError: "First name cannot be empty",
    //     });
    //   }
    //   if (details.Lname == "") {
    //     setError({
    //       ...error,
    //       LnameError: "last name cannot be empty",
    //     });
    //   }
    //   if (Topic.length < 0) {
    //     setError({
    //       ...error,
    //       topicError: "Please select your interests",
    //     });
    //   }
    // }
  // =====================================
    console.log("worked");
    formData.append("Fname", details.FName);
    formData.append("Lname", details.LName);
    formData.append("bio", details.bio);
    formData.append("topics", Topic);
    formData.append("avatar", details.image);
    console.log(formData);
    AxiosAuth.post("/create-profile", formData)
      .then((response) => {
        console.log(response);
        dispatch(setData(response.data))
         navigate("/home");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h6>Build your profile</h6>
      <form onSubmit={formSubmit} style={{ justifyContent: "center" }}>
        <Avatar
          style={{ alignItems: "center" }}
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 356, height: 200 }}
        />
        <label style={{ color: "black" }} htmlFor="">
          enter your first name
        </label>

        <MDBInput
          onChange={(e) => setDetails({ ...details, FName: e.target.value })}
        />
        <label style={{ color: "black" }} htmlFor="">
          enter your Last name
        </label>

        <MDBInput
          onChange={(e) => setDetails({ ...details, LName: e.target.value })}
        />
        <label style={{ color: "black" }} htmlFor="">
          Your interests
        </label>

        <Select
          onChange={handleChange}
          defaultValue={[options[0]]}
          isMulti
          name="topics"
          options={options}
          className="basic-multi-select"
          classNamePrefix="select"
        />
        <label style={{ color: "black" }} htmlFor="">
          You bio
        </label>
        <MDBInput
          onChange={(e) => setDetails({ ...details, bio: e.target.value })}
          type="textarea"
          rows="7"
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

export default UserTopic;
