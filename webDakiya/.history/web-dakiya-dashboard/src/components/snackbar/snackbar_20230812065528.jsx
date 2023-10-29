import React from 'react';
import { Snackbar, Alert } from '@mui/material';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';

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

CustomSnackbar.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  severity: PropTypes.oneOf(['error', 'warning', 'info', 'success']).isRequired,
};

export default CustomSnackbar;
