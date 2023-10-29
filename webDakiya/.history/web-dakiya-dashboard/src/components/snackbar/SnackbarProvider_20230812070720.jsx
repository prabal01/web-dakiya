jsx
import React, { createContext, useState } from 'react';

export const SnackbarContext = createContext();

export function SnackbarProvider({ children }) {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('info');

  const showSnackbar = (message, severity) => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setSnackbarOpen(true);
  };

  const hideSnackbar = () => {
    setSnackbarOpen(false);
  };

  const snackbarContextValue = {
    showSnackbar,
    hideSnackbar,
  };

  return (
    <SnackbarContext.Provider value={snackbarContextValue}>
      {children}
    </SnackbarContext.Provider>
  );
}