import { configureStore } from "@reduxjs/toolkit";
import AnswerReudcer from "./reducers/answers/AnswerReudcer";
import userLogin  from "./reducers/auth/userauth"
import  fetchAllQuestion  from "./reducers/questions/questionReducer"
import fetchTopics  from "./reducers/questions/TopicReducer"
import Modal  from "./reducers/feeds/addpost"
import fetchFeed  from "./reducers/feeds/fetchpost"
import AdminData from "./reducers/auth/adminauth"
import Chat from "./reducers/chats/chatsreducer"
import socket from "./reducers/chats/socket";
import chatUser from "./reducers/chats/chatuser";
import chatshowreducer from "./reducers/chats/chatshowreducer";




export const store =  configureStore({
    reducer:{
        userAuth:userLogin,
        fetchQuestions:fetchAllQuestion,
        fetchTopic:fetchTopics,
        answers :AnswerReudcer,
        modal:Modal,
        feeds:fetchFeed,
        Admin:AdminData,
        chat:Chat,
        socket:socket,
        userListenTo:chatUser,
        chatShow :chatshowreducer 
          
    }
}) 