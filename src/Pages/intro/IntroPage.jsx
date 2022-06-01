import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Wingpage from "../../components/wingpage/Wingpage";
import "./intropage.css";
import { useNavigate } from "react-router-dom";
import { TopicFetch } from "../../state/reducers/questions/TopicReducer";
function IntroPage() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch()

  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user, navigate]);

useEffect(() => {
  dispatch(TopicFetch())
}, [])

  return (
    <div className="wingpage">
      <Wingpage />
    </div>
  );
}

export default IntroPage;
