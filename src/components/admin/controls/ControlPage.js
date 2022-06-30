import { Box, Grid } from "@mui/material";
import React from "react";
import AdminBar from "../AdminBar";
import Controls from "./Controls";

function ControlPage() {
  return (
    <div className="homepage">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={0} md={3}>
            <AdminBar />
          </Grid>
          <Grid item xs={12} md={8}>
            <Controls/>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default ControlPage;
