import React from 'react';
import { Modal, Typography, Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

// Custom styled components
const CustomModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin:20px;
`;

const ModalContainer = styled(Box)`
  background-color: #fff;
  padding: 20px;
  border-radius:8px;
`;



const StyledModal = ({ open, onClose, title, content, actions }) => {
  return (
    <CustomModal open={open} onClose={onClose}>
      <ModalContainer>
              <Typography variant="h6" component="h2" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {content}
        </Typography>
        <Box display="flex" justifyContent="flex-end" marginTop={2}>
          {actions}
        </Box>
      </ModalContainer>
    </CustomModal>
  );
};

export default StyledModal;