import React, { useEffect, useState } from 'react'
import { AxiosAuth } from '../../../AxiosIns/AxiosAuth'

function Controls() {
const [items, setItems] = useState()

 useEffect(() => {
    AxiosAuth.get("report/items")
    .then((res)=>{
    setItems(res.data)
    console.log(items,'-');
    }
    )
 }, [])

  return (
    <div style={{marginTop:"7%"}}>Controls</div>
  )
}

export default Controls