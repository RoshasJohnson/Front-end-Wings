import React from 'react'
import "./eachQuesitonAndanswer.css";
import { Link, useLocation } from "react-router-dom";
function OneQuestion() {
  const location = useLocation();
  const {state:{data:{question,question_title,question_topic}}}=location
  return (
    <div className='one_qna'>
        {/* <h2>{data.data.question_title}</h2> */}
        <h2>{question_title}</h2>
        <p style={{whiteSpace:"pre-wrap",background:"rgb(236, 227, 227)"}}>{question}</p>
        <Link to  = ""><p style={{whiteSpace:"pre-wrap",background:"rgb(236, 227, 227)",width:"fit-content"}}>{question_topic.topics}</p></Link>
    </div>
  )
}

export default OneQuestion