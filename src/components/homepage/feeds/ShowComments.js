import React from "react";
import { Link } from "react-router-dom";
import "./Eachfeed.css";
import Avatar from "@mui/material/Avatar";
import ReactTimeAgo from "react-time-ago";
function ShowComments({ comments }) {


  return (
    <div className="comment-div">
      {comments &&
        comments.map((comment, index) => {
          return (
            <div key={index}>
              <div className="comment-box">
                <div className="comment-author">
                  <div className="comment-author-avatar">
                    <Avatar
                      alt={comment.username.fullname}
                      src={comment.username.avatar}
                    />
                  </div>
                  <div className="comment-author-name">
                    <Link to={`/${comment.username.username}`}>
                      {comment.username.fullname}
                    </Link>
                    <ReactTimeAgo style={{float:'right'}} date= {comment.created_at} locale="en-US" />
                  </div>
                </div>
                <div className="comment-content">
                    <p style={{marginLeft:"2%"}}>{comment.body}</p>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default ShowComments;
