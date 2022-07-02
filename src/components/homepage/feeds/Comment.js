import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import Picker from "emoji-picker-react";
import { AxiosAuth } from "../../../AxiosIns/AxiosAuth";
import ShowComments from "./ShowComments";

function Comment({ id }) {
  const [comments, setComments] = useState([]);
  const [state, setState] = useState(false);
  const [input, setInput] = React.useState("");
  const [showPicker, setShowPicker] = React.useState(false);
  const onEmojiClick = (event, emojiObject) => {
    setInput((prevInput) => prevInput + emojiObject.emoji);
    setShowPicker(false);
  };
  // ================================================================
  console.log(id, "id--------------------");
  const handleSumbit = () => {
    console.log(input);
    const data = new FormData();
    data.append("comment", input);
    data.append("parentPost", id);

    AxiosAuth.post("feeds/comment", data)
      .then((res) => {
        console.log(res.data);
        setComments(res.data);
        setState(!state);
      })
      .catch((err) => {
        console.log(err);
      });
    setInput("");
  };

  useEffect(() => {
    AxiosAuth.get(`feeds/comment/${id}`)
      .then((res) => {
        setComments(res.data);

      })
      .catch((err) => {
        console.log(err);
      });
  }, [state]);

useEffect(() => {
   
}
, [state]);


  return (
    <div>
      <form onSubmit={handleSumbit}>
        <input
          width="100"
          rows={4}
          height={150}
          cols={50}
          type="text"
          className="text-input"
          value={input}
          placeholder="What's about this ?"
          onChange={(e) => setInput(e.target.value)}
        />
        <div style={{ display: "flex" }}>
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
        </div>
        <SendRoundedIcon
          style={{
            width: "20px",
            color: "#1c9bf0",
            margin: "1px",
            float: "right",
            cursor: "pointer",
          }}
          onClick={handleSumbit}
        />
      </form>
      <ShowComments comments={comments} />
    </div>
  );
}

export default Comment;
