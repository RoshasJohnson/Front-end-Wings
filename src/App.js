import IntroPage from "./Pages/intro/IntroPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import { NotificationProvider } from "./context/Alert";
import NotificationBar from "./context/Notifications";
import Explore from "./Pages/explore/Explore ";
import LoginPage from "./components/wingpage/LoginPage";
import ProfilePage from "./Pages/profile/ProfilePage";
import ChatPage from "./Pages/chat/ChatPage";
import TopicwiseQuestins from "./components/QnA/questions/TopicwiseQuestins";

export default function App() {
  const loginStatus = useSelector((state) => state.userAuth.loginStatus);
  // const username = useSelector((state) => state.userData.user);
  // console.log(username,'hey man');
  return (
    <div className="app">
      <Router>
        <Header />

          <Routes>
            <Route excat path="/" element={<LoginPage />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/home" element={<HomePage />} />
            {/* <Route path="/register/profile" element={<UserProfile />} /> */}
            {/* Questions related ulrs */}
            <Route path="/questions" element={<Question />} />
            <Route path="/questions/:value" element={<EachQuestions />} />
            <Route path="/questions/topic/:value" element={<TopicwiseQuestins />} />
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
          </Routes>
      </Router>
    </div>
  );
}
