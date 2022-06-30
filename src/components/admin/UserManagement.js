import { Box, Grid } from '@mui/material'
import React, { useEffect } from 'react'
import { AxiosAuth } from '../../AxiosIns/AxiosAuth'
// import { Table } from 'react-bootstrap'
import AdminBar from './AdminBar'
import UserTable from './UserTable'

function UserManagement() {

  return (
    <div className="homepage">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={0} md={3}>
            <AdminBar />
          
          </Grid>
          <Grid item xs={12} md={8}>
            <UserTable/>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default UserManagement