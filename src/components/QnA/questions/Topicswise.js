import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
function Topicswise({data}) {
  const topics = data.topics
  console.log(topics,"-----rosohas------------------")
  return (
    <Stack style={{
      marginTop: "140%",
      color: "black",
       
    }} direction="column">
        
      <h6 style={{color:"black"}}>Topics wise</h6>
         { topics ? topics.map((topic)=>{
           return <>
           <Link to = {`/questions/topic/${topic.topics}`} state = {{data:topic.topics,id:topic.id}}>  <p> {topic.topics}</p></Link>
        
           </>
         }):
         ""
         }
        
    </Stack>
  )
} 

export default Topicswise