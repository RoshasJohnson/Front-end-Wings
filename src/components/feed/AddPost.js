import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { openModal } from "../../state/reducers/feeds/addpost";
import { useDispatch, useSelector } from "react-redux";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useNavigate } from "react-router-dom";
import {
  GiftIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
  SearchCircleIcon,
  commentIcon,
} from "@heroicons/react/outline";
import "./Addpost.css";
import Picker from "emoji-picker-react";
import { AxiosAuth } from "../../AxiosIns/AxiosAuth";

const style = {
  position: "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "white",
  boxShadow: 24,
  p: 4,
  borderRadius: "20px",
};

export default function AddPost() {
  const [input, setInput] = React.useState("");
  const [showPicker, setShowPicker] = React.useState(false);

  const onEmojiClick = (event, emojiObject) => {
    setInput((prevInput) => prevInput + emojiObject.emoji);
    setShowPicker(false);
  };

  const [image, setImage] = React.useState("");
  console.log(image, "image");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isopen = useSelector((state) => state.modal.isOpen);

  const handleOpen = () => {};
  const handleClose = () => dispatch(openModal(false));

  const handleSumbit = (e) => {
    e.preventDefault();
    const data = new FormData();
    const checkImg = () => {
      if (image === undefined) {
        alert("Please select an image");
      } else {
        return true;
      }
    };

    const checkPost = () => {
      if (input === "") {
        alert("Please write a post");
      } else {
        return true;
      }
    };
    if (checkImg() && checkPost()) {
      data.append('image',image)
      data.append("description", input);
      AxiosAuth.post("feeds/", data).then((res) => {
        console.log(res, "res");
        setInput("");
        setImage(null);
        handleClose();
        navigate("/home");
      });
    }
  };
  return (
    <div>
      <Modal
        className="modal-div"
        open={isopen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CloseOutlinedIcon
            style={{ color: "black", cursor: "pointer" }}
            onClick={handleClose}
          />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Create Post
          </Typography>
          <Typography id="modal-modal-description">
            <div>
              <form onSubmit={handleSumbit}>
                <textarea
                  width="100"
                  rows={4}
                  height={150}
                  cols={50}
                  type="text"
                  className="text-input"
                  value={input}
                  placeholder="What's in your mind ?"
                  onChange={(e) => setInput(e.target.value)}
                />
                <input
                  type="file"
                  accept="image/*"
                  onClick={(e) => setImage(e.target.files[0])}
                  style={{ display: "none" }}
                  id="icon-button-file"
                />
                <div style={{ display: "flex" }}>
                  <label htmlFor="icon-button-file">
                    <PhotographIcon
                      style={{ width: "20px", color: "#1c9bf0", margin: "1px" }}
                      id="icon-button-file"
                      cursor={"pointer"}
                    />
                  </label>
                  <label htmlFor="">
                    <SearchCircleIcon
                      style={{ width: "20px", color: "#1c9bf0", margin: "1px" }}
                    />
                  </label>
                  <label htmlFor="">
                    <EmojiHappyIcon
                      style={{ width: "20px", color: "#1c9bf0", margin: "1px" }}
                      cursor={"pointer"}
                      onClick={() => setShowPicker((val) => !val)}
                    />
                    {showPicker && (
                      <Picker
                        pickerStyle={{ width: "100%" }}
                        onEmojiClick={onEmojiClick}
                      />
                    )}
                  </label>
                  <label htmlFor="">
                    <LocationMarkerIcon
                      style={{ width: "20px", color: "#1c9bf0", margin: "1px" }}
                    />
                  </label>
                  <label htmlFor="">
                    <GiftIcon
                      style={{ width: "20px", color: "#1c9bf0", margin: "1px" }}
                    />
                  </label>
                </div>
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
                  onClick={handleSumbit}
                  variant="contained"
                >
                  Let's wing
                </Button>

                <img src={image} alt="" />
              </form>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
