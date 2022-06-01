import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./signpage.css";
function Userprofile() {
  const [Details, setDetails] = useState({ fname: "", lname: "", avatar: "" });


    // Add code here to upload file to server
    // ...

  return (
    <div className="profilepage">
      <h1>Who are you</h1>
        <div>
        <div id="upload-box">
      <input type="file" />
      <p>Filename:</p>
      <p>File type: </p>
      <p>File size:bytes</p>
    </div>
        </div>
    </div>
  );
}

export default Userprofile;

