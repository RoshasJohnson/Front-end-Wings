import IntroPage from "./Pages/intro/IntroPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import SignUp from "./components/wingpage/register/Signup";
import HomePage from "./Pages/home/HomePage";

import Question from "./components/QnA/questions/Question";
import { useDispatch, useSelector } from "react-redux";
import EachQuestions from "./components/QnA/questions/EachQuestions";
import "./App.css";

import Header from "./components/navbars/Header";
import Userprofile from "./components/wingpage/register/Userprofile";
import AllTopics from "./components/wingpage/register/AllTopics";
import AskQuestionPage from "./Pages/questions/AskQuestionPage";
import Explore from "./Pages/explore/Explore ";
import LoginPage from "./components/wingpage/LoginPage";
import ProfilePage from "./Pages/profile/ProfilePage";
import ChatPage from "./Pages/chat/ChatPage";
import TopicwiseQuestins from "./components/QnA/questions/TopicwiseQuestins";
import MyQuestions from "./components/QnA/questions/MyQuestions";
import AddPost from "./components/feed/AddPost";
import AdminHead from "./components/admin/AdminHead";
import { useEffect, useState } from "react";
import AdminLogin from "./components/admin/AdminLogin";
import UserManagement from "./components/admin/UserManagement";
import { io } from "socket.io-client";
import {setSocket} from "./state/reducers/chats/socket";
import { SetuserListenTo } from "./state/reducers/chats/chatuser";
import ControlPage from "./components/admin/controls/ControlPage";
import { setChatShow } from "./state/reducers/chats/chatshowreducer";
import { setChat } from "./state/reducers/chats/chatsreducer";

export default function App() {

  try {
    var user = useSelector(state=>state.userAuth.userData.user.id)
    } catch (error) {
      
    }
  
  const dispatch =  useDispatch()
  const loginStatus = localStorage.getItem("loginStatus");
  // const location =  useLocation()

  console.log(loginStatus);
  const [admin, setAdmin] = useState(false);


  
const socket = useSelector(state=>state.socket.socket)
 const userListenTo = useSelector(state=>state.userListenTo)

 const chats  = useSelector((state) =>state.chat.chats);


 

  useEffect(() => {

    // const user = decodeJwtToken() // get user from jwt token
    if (user) {
      try {
        if (!socket) {
          const socket = io("https://wingschantapp.herokuapp.com/"); // connect to socket io
          // set socket io instance in the redux state
          dispatch(setSocket(socket));
        }

        // set username with socket io for set user to be online
        console.log(user, " useruseruseruseruser");
        socket && socket.emit("set_online", { username: user });

        // listen message event . this message gives the messages emitted using this user if
        socket &&
          socket.on("messages", (data) => {
            // if the curr user listening user id and the user sended this message
            // this both ids are same the messsage will update in the redux state
            console.log("===================", data);
           
            const message = JSON.parse(data.message);
            console.log("99999999999999");
            if (
              parseInt(message.conversation_id) ==
              parseInt(userListenTo.userListenTo.chatId)
              
            ) {
              dispatch(setChat([...chats, message]));
              console.log("0000000000000000000000000");
            }
          });
      } catch (err) {
        console.log(err);
      }
    }
  }, [user, userListenTo, socket]);

  return (
    <div className="app">
      <Router>
        {loginStatus ? <Header /> : null}
        {admin ? <AdminHead /> : null}
        <AddPost />

        <Routes>
          {/*   ====================  User routers   =============================== */}

          <Route excat path="/" element={<LoginPage />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/home" element={<HomePage />} />
          {/* <Route path="/register/profile" element={<UserProfile />} /> */}
          {/* Questions related ulrs */}
          <Route path="/questions" element={<Question />} />
          <Route path="/questions/:value" element={<EachQuestions />} />
          <Route
            path="/questions/topic/:value"
            element={<TopicwiseQuestins />}
          />
          <Route path="/my-question" element={<MyQuestions />} />
          {/* =================================== */}
          <Route path="/my-favourite-topics" element={<AllTopics />} />
          <Route path="/ask-question" element={<AskQuestionPage />} />
          <Route path="/roshas/roshas" element={<Header />} />
          <Route path="/who-am-i" element={<Userprofile />} />
          <Route path="/my-favourite-topics" element={<AllTopics />} />
          {/* People connection  related ulrs */}
          <Route path="/explore" element={<Explore />} />
          {/* =================================== */}
          <Route path="/message" element={<ChatPage />} />

          <Route path="/:value" element={<ProfilePage />} />
          {/*   ====================  Admin routers   =============================== */}

          <Route path="/admin/dashboard" element={<AdminHead />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/usermanagement" element={<UserManagement />} />
          <Route path="/admin/controls" element={<ControlPage />} />
        </Routes>
      </Router>
    </div>
  );
}
