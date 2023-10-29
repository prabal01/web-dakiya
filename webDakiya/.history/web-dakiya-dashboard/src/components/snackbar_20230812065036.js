import React from 'react';
import { Snackbar, Alert } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledSnackbar = styled(Snackbar)`
  .MuiAlert-root {
    background-color: #333;
    color: #fff;
  }
`;

function CustomSnackbar({ open, onClose, message, severity }) {
  return (
    <StyledSnackbar open={open} autoHideDuration={3000} onClose={onClose}>
      <Alert onClose={onClose} severity={severity}>
        {message}
      </Alert>
    </StyledSnackbar>
  );
}

export default CustomSnackbar;
