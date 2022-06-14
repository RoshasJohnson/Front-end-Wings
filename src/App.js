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
import { useState } from "react";
import AdminLogin from "./components/admin/AdminLogin";

export default function App() {
  const loginStatus = localStorage.getItem("loginStatus");
  // const location =  useLocation()

  console.log(loginStatus);
  const [admin, setAdmin] = useState(false);

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

          <Route excat path="/admin/dashboard" elment={<AdminHead />} />
          <Route excat path="/admin/login" element={<AdminLogin />} />
        </Routes>
      </Router>
    </div>
  );
}
