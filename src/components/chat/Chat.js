import React, { useEffect, useState } from "react";
import "./chat.css";
import { Col, Container, Row } from "react-bootstrap";

import ChastList from "./ChastList";
import ChatPage from "./ChatPage";
import { AxiosAuth } from "../../AxiosIns/AxiosAuth";
import { useDispatch, useSelector } from "react-redux";

function Chat() {
  const [chats, setChats] = useState();
  const cur_user = useSelector((state) => state.userAuth.userData.user.id);

  useEffect(() => {
    AxiosAuth.get("chat/get_chats").then((res) => {
      setChats(res.data);
    });
  }, []);

  return (
    <Row className="mainContainer">
      <Col className="users	d-sm-none d-md-block" md={3}>
        {chats &&
          chats.map((chat) => {
            let user;
            if (chat.user1.id === cur_user) {
              user = chat.user2;
            } else {
              user = chat.user1;
            }

            return <ChastList chat={user} chatId={chat.id} />;
          })}
      </Col>
      <Col className="chats" md={7}>
        <ChatPage curuser={chats && chats} />
      </Col>
    </Row>
  );
}

export default Chat;
