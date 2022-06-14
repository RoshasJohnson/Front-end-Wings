import { configureStore } from "@reduxjs/toolkit";
import AnswerReudcer from "./reducers/answers/AnswerReudcer";
import userLogin  from "./reducers/auth/userauth"
import  fetchAllQuestion  from "./reducers/questions/questionReducer"
import fetchTopics  from "./reducers/questions/TopicReducer"
import Modal  from "./reducers/feeds/addpost"
import fetchFeed  from "./reducers/feeds/fetchpost"
import AdminData from "./reducers/auth/adminauth"


export const store =  configureStore({
    reducer:{
        userAuth:userLogin,
        fetchQuestions:fetchAllQuestion,
        fetchTopic:fetchTopics,
        answers :AnswerReudcer,
        modal:Modal,
        feeds:fetchFeed,
        Admin:AdminData
          
    }
}) 