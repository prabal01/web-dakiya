jsx
import React, { useContext } from 'react';
import { Snackbar, Alert } from '@mui/material';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { SnackbarContext } from './SnackbarContext';

const StyledSnackbar = styled(Snackbar)`
  .MuiAlert-root {
    background-color: #333;
    color: #fff;
  }
`;

function CustomSnackbar() {
  const { snackbarOpen, snackbarMessage, snackbarSeverity, hideSnackbar
} = useContext(SnackbarContext);

  return (
    <StyledSnackbar
      open={snackbarOpen}
      autoHideDuration={3000}
      onClose={hideSnackbar}
    >
      <Alert onClose={hideSnackbar} severity={snackbarSeverity}>
        {snackbarMessage}
      </Alert>
    </StyledSnackbar>
  );
}

CustomSnackbar.propTypes = {
  snackbarMessage: PropTypes.string.isRequired,
  snackbarSeverity: PropTypes.oneOf(['error', 'warning', 'info', 'success']).isRequired,
};

export default CustomSnackbar;