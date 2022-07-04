import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { SetuserListenTo } from "../../state/reducers/chats/chatuser";
import socket from "../../state/reducers/chats/socket";

import "./chat.css";
function ChatPage({curuser}) {


  console.log(curuser,"chasts,================================");
  const chats = useSelector((state) => state.chat.chats);
  const user = useSelector((state) => state.userAuth.userData.user.id);
  const soket = useSelector((state) => state.socket.socket);
  const userListenTo = useSelector((state) => state.userListenTo.userListenTo);
  const [message, setMessage] = useState("");
 
//  curuser.filter()
 
 

  const handleMessage = async () => {
    try {
      const { data } = await axios.post("https://wingschantapp.herokuapp.com/send_messages", {
        message: message,
        conversation_id: userListenTo.chatId,
        sender: user,
        receiver: userListenTo.senderId,
      });
      console.log(data);
      setMessage("");
    } catch (error) {
      console.log(error);
    }
  };

  console.log(chats, "^^^^^^^^^^^^^^^^^^^^^");
  const [sender, setSender] = useState([]);
  const [receiver, setReceiver] = useState([]);
  console.log(sender, "---ff");

  return (
    <>
      <div className="chatHeadd-flex">
        {/* <img
          className="chatProfile"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDJzEaxLN-jGRYYUO65pWu7Q9GXoNt4LUSSA&usqp=CAU"
          alt=""
        />
        <h5 className=""></h5> */}
      </div>
      <hr />

      <div className="ChatBox overflow-auto">
        {chats &&
          chats.map((chat) => {
            var style = null;
            if (chat.sender == user) {
              style = {
                backgroundColor: "wheat",
                width: "100%",
            
                padding: "5px",
                marginBottom: "2px",
                float:"right"
               
              };
            } else {
              style = {
                backgroundColor: "gray",

                width: "100%",
              
                padding: "5px",
                marginBottom: "2px",
               };
            }
            return (
              <>
              <div style={{width:"100%"}}>

            
                <div
                  // style={{
                  //   width: "fit-content",
                  //   backgroundColor: "white",
                  //   borderRadius: "20px",
                  //   padding: "5px",
                  //   marginBottom: "2px",
                  // }}
                  style={style}
                  className="singleChat"
                >
                  <h6 className="text-info">
                    {user == chat.sender ? <p>You</p> : <p></p>}
                  </h6>
                  <div >

                  <p> {chat.message} </p>
                  </div>

                </div>
                </div>
              </>
            );
          })}
      </div>
      <div className="chatInput d-flex">
        <input
          type="text"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <button
          style={{ borderRadius: "30%" }}
          type="button"
          className="btn btn-info m-0 "
          onClick={handleMessage}
        >
          Send
        </button>
      </div>
    </>
  );
}

export default ChatPage;
