import React, { useEffect, useState } from "react";

import ShowFeed from "./ShowFeed";



function EachFeed({ items }) {
 



  return (
    <div>
      <ShowFeed item={items} />
    </div>
  );
}

export default EachFeed;
