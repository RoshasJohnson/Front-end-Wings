import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Wingpage from "../../components/wingpage/Wingpage";
import "./intropage.css";
import { useNavigate } from "react-router-dom";

function IntroPage() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user, navigate]);

  return (
    <div className="wingpage">
      <Wingpage />
    </div>
  );
}

export default IntroPage;
