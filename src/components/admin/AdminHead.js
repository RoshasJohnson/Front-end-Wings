import * as React from "react";

import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";

import { Grid } from "@mui/material";
import AdminBar from "./AdminBar";
import UserManagement from "./UserManagement";
import AdminDashboard from "./dashboard/AdminDashboard";

export default function AdminHead() {
  return (
    <div className="homepage">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={0} md={3}>
            <AdminBar />
            
          </Grid>
          <Grid item xs={12} md={6}>
            <AdminDashboard/>
  
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
