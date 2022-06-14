import * as React from 'react';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function AlertMessage(props) {
  return (
    <Stack sx={{ width: '100' }} spacing={2}>
      <Alert style={{ background: "rgba(0, 0, 0, 0.5)",color:"white",fontWeight: '700',}} onClose={() => {props.handleClose()}}>{props.message}</Alert>

  
    </Stack>
  );
}
