import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
function Topicswise({data}) {
  const topics = data.topics
  console.log(topics,"[[[[[[[[[[[[[[[[[[[[[[[[[[[[");
  return (
    <Stack spacing={2} direction="row">
        <p>Topic wise</p>
        <div>
       {/* {topics.map((topic)=>{
         return(<>
         <button>{topic.topics}</button>
         </>)
       })} */}
      </div>
        
    </Stack>
  )
}

export default Topicswise