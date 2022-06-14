import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import SideBar from "../../components/homepage/SideBar";
import "../home/Homepage.css";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import { TopicFetch } from "../../state/reducers/questions/TopicReducer";
import AddPost from "../../components/feed/AddPost";
import EachFeed from "../../components/homepage/feeds/EachFeed";
import { feedFetch } from "../../state/reducers/feeds/fetchpost";
import Weather from "./Weather";
import "./Homepage.css";

function HomePage() {
  const post = useSelector((state) => state.feeds.Feed);

  const dispatch = useDispatch();
  const loginStatus = localStorage.getItem("loginStatus")
  const navigate = useNavigate();
  useEffect(() => {
    // if (loginStatus) {
    //   navigate("/home");
    // } else {
    //   navigate("/");
    // }
  }, [loginStatus, navigate]);

  useEffect(() => {
    dispatch(TopicFetch());
  }, []);

  useEffect(() => {
    console.log("blahh");
    dispatch(feedFetch());
  },[])

  return (
    <div className="homepage">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={0} md={3}>
            <SideBar />
          </Grid>
          <Grid item xs={12} md={6 }>
            {" "}
          { post && post.map((item) => <EachFeed items={item} />)}
    
          </Grid>
          <Grid item xs={12} md={3} style = {{marginTop:"3%" }}>
          < div className="rightside" style={{marginTop:"10%"}}>
              <Weather/>
           </div>
          </Grid>

          {/* <Grid item xs={0} md={3}>
           < div style={{marginTop:"10%"}}>
           <h1>sldfjk</h1>
           </div>
          </Grid> */}
        </Grid>
      </Box>
    </div>
  );
}

export default HomePage;
