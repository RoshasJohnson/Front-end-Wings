import { configureStore } from "@reduxjs/toolkit";
import userLogin  from "./reducers/auth/userauth"
import  fetchAllQuestion  from "./reducers/questions/questionReducer"
import fetchTopics  from "./reducers/questions/TopicReducer"

export const store =  configureStore({
    reducer:{
        userAuth:userLogin,
        fetchQuestions:fetchAllQuestion,
        fetchTopic:fetchTopics
    }
}) 