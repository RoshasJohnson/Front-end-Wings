import { Avatar } from "@mui/material";
import React from "react";
import axios from "../../axios";
import { setChat } from "../../state/reducers/chats/chatsreducer";
import { useDispatch, useSelector } from "react-redux";
import { SetuserListenTo } from "../../state/reducers/chats/chatuser";
import { setChatShow } from "../../state/reducers/chats/chatshowreducer";


function ChastList({ chat, chatId }) {
  const dispatch = useDispatch();
  const myChats = useSelector((state) => state.chat);
  


  const handleGetMessages = async (chat, chatId) => {
    console.log(chatId,'--', chat);
    
    try {
      const { data } = await axios.get(
        "https://wingsfrontend.herokuapp.com/messages?conversation_id=" + parseInt(chatId)
      );
      console.log(data.messages, "+++++++");
     
      dispatch(setChat([...data.messages]));

      dispatch(SetuserListenTo({chatId: chatId, senderId: chat.id}))
    } catch (error) {
      console.log(error);
      console.log("$$$44");
    }
  };
  console.log(chat, "===========================");
  return (
    <div
      className=" overflow-auto"
      onClick={() => handleGetMessages(chat, chatId)}
    >
      <div className="d-flex mb-2 " style={{ cursor: "pointer" }}>
        <Avatar alt={chat.fullname} src={chat.avatar} />
        <p className="m-2">{chat.fullname}</p>
      </div>
    </div>
  );
}

export default ChastList;
