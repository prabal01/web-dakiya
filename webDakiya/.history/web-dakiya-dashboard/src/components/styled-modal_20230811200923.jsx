jsx
import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

// Custom styled components
const CustomDialogTitle = styled(DialogTitle)`
  background-color: #f5f5f5;
  color: #333;
`;

const CustomDialogContent = styled(DialogContent)`
  background-color: #fff;
  color: #555;
`;

const CustomDialogActions = styled(DialogActions)`
  background-color: #f5f5f5;
`;

// Reusable Modal component
const StyledModal = ({ open, onClose, title, content, actions }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <CustomDialogTitle>{title}</CustomDialogTitle>
      <CustomDialogContent>{content}</CustomDialogContent>
      <CustomDialogActions>{actions}</CustomDialogActions>
    </Dialog>
  );
};

export default StyledModal;