import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AXIOS from "../../../axios";
import Select from "react-select";
import Avatar from "@mui/material/Avatar";
import { MDBInput } from "mdbreact";
import { AxiosAuth } from "../../../AxiosIns/AxiosAuth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../../../state/reducers/auth/userauth";
import "./signpage.css";
import axios from "../../../axios";

function UserTopic() {
  const dispatch = useDispatch();
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
    profession: "",
    bio: "",
  });

  console.log(details.image);
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
  // console.log(localStorage.getItem("access"));
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
  // const userid =  useSelector((state) => state.userAuth.loginStatus)

  const token = useSelector((state) => state.userAuth.userData.jwt.access);

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
    formData.append("Fname", details.FName);
    formData.append("Lname", details.LName);
    formData.append("profession", details.profession);
    formData.append("bio", details.bio);
    formData.append("topics", Topic);
    formData.append("avatar", details.image);

    axios
      .put("/create-profile", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        dispatch(setData(response.data));
        navigate("/home");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // =====================================

  return (
    <div style={{ width: "100%", background: "white" }}>
      <form onSubmit={formSubmit}>
        <Avatar
          // style={{ alignItems: "center" }}
          src={details.image}
          sx={{ width: 356, height: 200 }}
        />
        <input
          name="image"
          type="file"
          onChange={(e) => setDetails({ ...details, image: e.target.files[0] })}
          multiple
          accept="image/*"
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
          enter your Profession
        </label>

        <MDBInput
          onChange={(e) => setDetails({ ...details, profession: e.target.value })}
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
