import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import AXIOS from '../../../axios';
import AllTopics from './AllTopics';
import "./signpage.css";
function UserTopic() {
const [data, setdata] = useState([])
console.log(data,'dddddddddddddddddddddddddd');

useEffect(() => {
    AXIOS.get('topics')
    .then(res => {
      const topics = res.data;
      console.log(topics);
      setdata(topics.topics)
    })
},[])  


  return (
    <div className='profilepage'>
        <div >
           
            <p>Choose your favourite topics</p>
                <div className='choose-topic'>
                    <AllTopics data = {data}/>
                </div>
        </div>
    </div>
  )
}

export default UserTopic