import { configureStore } from "@reduxjs/toolkit";
import userLogin  from "./reducers/auth/userauth"
import  fetchAllQuestion  from "./reducers/questions/questionReducer"


export const store =  configureStore({
    reducer:{
        userAuth:userLogin,
        fetchQuestions:fetchAllQuestion,
    }
})