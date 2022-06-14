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
  const [like, setLike] = useState(false);
  const dispatch = useDispatch();
  const post = useSelector((state) => state.feeds.Feed);
  const loading = useSelector((state) => state.feeds.loading);
  //=========================================================//
  const user = useSelector((state) => state.userAuth.userData.user.id);

  let is_liked = false;

    for (let i = 0; i < item.is_like.length; i++) {
        if (item.is_like[i] === user) {
            is_liked = true;
        }
    }
  //=========================================================//


  console.log(is_liked, "is_liked");

  const [showComment, setShowComment] = useState(false);


  //=========================================================//
    const handleLike = () => {
         AxiosAuth.put("feeds/like", {
            post_id: item.id
        })
        .then(res => {
            console.log(res.data);
            is_liked = true;
        }
        )
        .catch(err => {
            console.log(err);
        }
        );
    }
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
                  {is_liked ? (
                      <>
                    <FavoriteRoundedIcon
                      style={{
                        width: "20px",
                        color: "#1c9bf0",
                        margin: "2%",
                        marginTop: "2%",
                        cursor: "pointer",
                      }}
                      className="like"
                      onClick={handleLike}
                    />
                    <p style={{ color: "gray", marginTop: "1%" }}>
                    <small>{item.likeCount}</small>
                  </p>
                  </>
                  ) : (
                      <>
                    <FavoriteBorderRoundedIcon
                      style={{
                        width: "20px",
                        color: "#1c9bf0",
                        margin: "1px",
                        cursor: "pointer",
                      }}
                      onClick={handleLike}
                      className="like"
                      />
                       <p style={{ color: "gray", marginTop: "1%" }}>
                    <small>{item.likeCount}</small>
                  </p>
                  </>
                  )}
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
