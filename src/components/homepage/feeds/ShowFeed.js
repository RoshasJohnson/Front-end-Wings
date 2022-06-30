import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactTimeAgo from "react-time-ago";
import { feedFetch } from "../../../state/reducers/feeds/fetchpost";
import ForumRoundedIcon from "@mui/icons-material/ForumRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import "./Eachfeed.css";
import IosShareIcon from "@mui/icons-material/IosShare";
import FeedMenu from "../../menus/FeedMenu";
import Comment from "./Comment";
import { AxiosAuth } from "../../../AxiosIns/AxiosAuth";

function ShowFeed({ item }) {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.feeds.Feed);
  const loading = useSelector((state) => state.feeds.loading);
  //=========================================================//
  const user = useSelector((state) => state.userAuth.userData.user.id);
  const [like, setLike] = useState(false);
  let is_liked = false;
  console.log(item.post);
 const [likeCounts, setLikeCounts] = useState(item.likeCount);

  useEffect(() => {
    if (item.is_like.includes(user)) {
      setLike(true);
    }
  }, []);
  //=========================================================//



  const [showComment, setShowComment] = useState(false);

  //=========================================================//
  const handleLike = () => {
    // setLike(!like);
    AxiosAuth.put("feeds/like", {
      post_id: item.id,
    })
      .then((res) => {
        console.log(res.data,'=========================================================');
        setLikeCounts(res.data);

        setLike(!like);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //=========================================================//

  useEffect(() => {
    dispatch(feedFetch());
  }, []);

  return (
    <div className="eachfeed" style={{ marginTop: "10%" }}>
      {loading && <Spinner animation="border" variant="info" />}

      <div
        style={{ marginTop: "2%", background: "white" }}
        className="eachfeed"
      >
        <div style={{ display: "flex" }}>
          <div style={{ borderRadius: "30px" }}>
            <Avatar alt="Remy Sharp" src={item.author.avatar} />
          </div>
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                paddingLeft: "10px",
              }}
            >
              <Link to={`/${item.author.username}`}>
                {" "}
                <p>{item.author.fullname}</p>
              </Link>
              <p>
                <small>
                  {" "}
                  <ReactTimeAgo
                    style={{
                      color: "gray",
                      margin: "10px",
                      float: "right",
                    }}
                    date={item.created_at}
                  />
                </small>
              </p>
            </div>
            <p>{item.description}</p>

            <img
              // style={{ width: "100%", height: "400px" }}
              src={item.post}
            />

            <div
              style={{
                marginTop: "2%",
                marginBottom: "2%",
                display: "flex",
              }}
            >
              <div className="action-div">
                <div style={{ display: "flex" }}>
                 
                      <FavoriteRoundedIcon
                      
                        className= {like ? "liked" : "like"}
                        onClick={handleLike}
                      />
                      <p style={{ color: "gray", marginTop: "1%" }}>
                        <small>{likeCounts}</small>
                      </p>
                    
                 
                </div>

                <div
                  style={{ display: "flex", marginLeft: "2%", marginTop: "3%" }}
                >
                  <ForumRoundedIcon
                    onClick={() => setShowComment(!showComment)}
                    className="comment"
                  />
                  <p style={{ color: "gray", marginTop: "1%" }}>
                    <small>{item.commentCount}</small>
                  </p>
                </div>
                <div className="comment">
                  <IosShareIcon />
                </div>
                {/* <div className="comment" >
                    <IosShareIcon  />
            
                  </div>
                 */}
              </div>
            </div>
          </div>
        </div>
        {showComment && <Comment id={item.id} />}
      </div>
    </div>
  );
}

export default ShowFeed;
