import React, { useEffect, useState } from "react";
import "./myprofile.css";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { AxiosAuth } from "../../AxiosIns/AxiosAuth";
import { Card, Form, Spinner } from "react-bootstrap";
import { Avatar, Button, Stack } from "@mui/material";
import { setData } from "../../state/reducers/auth/adminauth";
import EditProfile from "./EditProfile";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import {
  GiftIcon,
  LocationMarkerIcon,
  PhotographIcon,
  SearchCircleIcon,
} from "@heroicons/react/outline";

function MyProfile() {
  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();
  const myprofile = useSelector((state) => state.userAuth.userData.user);
  let name = myprofile.fullname.split(" ");
  console.log(name,'=====================');
  useEffect(() => {
    setloading(true);
    AxiosAuth.get("myprofile")
      .then((res) => {
        dispatch(setData(res.data));
        setloading(false);
        console.log(res.data, "========--=---=========");
      })
      .catch((err) => {
        console.log(err);
        setloading(false);
      });
  }, []);
  const [input, setInput] = React.useState("");
  const [image, setImage] = React.useState("");
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const style = {
    position: "absolute",
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    bgcolor: "white",
    boxShadow: 24,
    p: 4,
    borderRadius: "20px",
  };

  const [details, setDetails] = useState({
    firstname: name[0],
    lastname: name[2],
    profession: myprofile.profession,
    bio: myprofile.bio,
  });
console.log(details, "details");
  return (
    <div style={{ marginTop: "7%" }}>
      <div>
        <>
          <div className="maindiv" style={{ width: "fit-content" }}>
            {loading && <Spinner variant="info" animation="border" />}
            <div>
              <div className="cover-image">
                <img
                  style={{ maxHeight: "200px" }}
                  src={myprofile.cover_image}
                  alt="cover"
                />
              </div>

              <div className="profile-image">
                <Stack direction={""}>
                  <Avatar
                    alt="Remy Sharp"
                    src={myprofile.avatar}
                    sx={{ width: 100, height: 100 }}
                  />
                  <Stack style={{ width: "100%" }}>
                    <h6
                      style={{
                        marginTop: "3%",
                        marginLeft: "3%",
                        font: 700,
                        fontWeight: "900",
                      }}
                    >
                      {myprofile.fullname}
                    </h6>
                    <p
                      style={{ font: 700, fontWeight: "900", marginLeft: "3%" }}
                    >
                      {myprofile.profession}
                    </p>
                    <p style={{ marginLeft: "3%" }}>{myprofile.bio}</p>
                  </Stack>

                  <div>
                    <Button
                      onClick={() => {
                        setOpen(true);
                      }}
                      style={{ textTransform: "none", margin: "2%" }}
                      variant="contained"
                    >
                      {" "}
                      Edit
                    </Button>
                  </div>
                </Stack>
                <div style={{ with: "fit-content" }}>
                  <h4>My Network</h4>
                </div>
                <div className="mytest">
                  <br />
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </>
      </div>
      <div>
        <Modal
          className="modal-div"
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            {/* <CloseOutlinedIcon
            style={{ color: "black", cursor: "pointer" }}
            // onClick={handleClose}
          /> */}
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Edit profile
            </Typography>
            <Typography id="modal-modal-description">
              <div>
                <Form>
                  <Form.Label style={{ color: "black" }}>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={details.firstname}
                    onChange={(e) => {
                      setDetails({ ...details, firstname: e.target.value });
                    }}
                  />
                <Form.Label style={{ color: "black" }}>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={details.lastname}
                    onChange={(e) => {
                      setDetails({ ...details, lastname: e.target.value });
                    }}
                  />
                  <Form.Label style={{ color: "black" }}>Profession</Form.Label>
                  <Form.Control
                    type="text"
                    value={details.profession}
                    onChange={(e) => {
                      setDetails({ ...details, profession: e.target.value });
                    }}
                  />
                    <Form.Label style={{ color: "black" }}>Bio</Form.Label>
                    <Form.Control
                        as="textarea"
                        value={details.bio}
                        onChange={(e) => {
                            setDetails({ ...details, bio: e.target.value });
                        }
                        }
                    />
                    
                    <Button
                  style={{
                    background: "##1c9bf0 !important",
                    marginTop: "10px",
                    borderRadius: "20px",

                    float: "right",
                    color: "white",
                    fontWeight: "700",
                    textTransform: "none",
                  }}
                 
                  variant="contained"
                >
                Save
                </Button>
                </Form>
              </div>
            </Typography>
          </Box>
        </Modal>
      </div>
    </div>
  );
}

export default MyProfile;
