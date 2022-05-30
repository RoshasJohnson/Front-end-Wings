import IntroPage from "./Pages/intro/IntroPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/wingpage/register/Signup";
import HomePage from "./Pages/home/HomePage";
import UserProfile from "./Pages/profile/UserProfile";
import Question from "./components/QnA/questions/Question";
import DuckerBar from "./components/DuckerBar";
import { useDispatch, useSelector } from "react-redux";
import EachQuestions from "./components/QnA/questions/EachQuestions";
import "./App.css"
import Header from "./components/navbars/Header";

export default function App() {
  const loginStatus = useSelector((state) => state.userAuth.loginStatus);
  return (
    <div className="app"> 
      <Router>
      <Header />
        <Routes>
          <Route excat path="/" element={<IntroPage />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/register/profile" element={<UserProfile />} />
          <Route path="/questions" element={<Question />} />
          <Route path="/questions/:value" element={<EachQuestions />} />
          <Route path="/roshas/roshas" element={<Header />} />
        </Routes>
      </Router>
    </div>
  );
}
