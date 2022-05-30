import { Container, Stack } from "@mui/material";
import React from "react";
import "./wingpage.css";
import LoginPage from "./LoginPage";



function Wingpage() {
  return (
    <div>
      <Container>
        <Stack direction={"row"} spacing={1}>
          {/* <img className="logoimage" src="/images/duck.png" alt="" /> */}
          <LoginPage />
        </Stack>
      </Container>
    </div>
  );
}

export default Wingpage;
