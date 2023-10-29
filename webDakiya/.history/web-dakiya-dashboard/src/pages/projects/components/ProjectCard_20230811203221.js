// @mui
import PropTypes from 'prop-types';
import { alpha, styled } from '@mui/material/styles';
import { Button, Card, Grid, IconButton, Typography } from '@mui/material';
// utils

import { formatDate } from '../../../utils/time-utils';
// components
import Iconify from '../../../components/iconify';
import CopyButton from '../../../components/CopyButton';
import { useState } from 'react';
import StyledModal from 'src/components/styled-modal';

// ----------------------------------------------------------------------

const StyledIcon = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
}));

// ----------------------------------------------------------------------

ProjectCard.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
  vapidKey: PropTypes.string.isRequired,
  sx: PropTypes.object,
};

export default function ProjectCard({ deleteProjectHandler, title, createdAt, vapidKey, icon, color = 'primary', sx, ...other }) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

// Open the delete modal
const handleOpenDeleteModal = () => {
  setIsDeleteModalOpen(true);
};

// Close the delete modal
const handleCloseDeleteModal = () => {
  setIsDeleteModalOpen(false);
};

  return (
    
    <Card
    sx={{
      py: 5,
      boxShadow: 0,
      textAlign: 'center',
      color: (theme) => theme.palette[color].darker,
      bgcolor: (theme) => theme.palette[color].lighter,
      ...sx,
    }}
    {...other}
    >
      <div style={{display:'flex', justifyContent:"space-between", padding:'0 20px', marginTop:"-25px", marginBottom:"15px"}}>
        <div style={{display:'flex', alignItems:"center"}}>
          <Typography><span style={{fontWeight:'bold'}}>Created At:</span> {formatDate(createdAt)}</Typography>
        </div>
        <div >
          <IconButton onClick={()=>setIsDeleteModalOpen(true)}>
          <Iconify icon="ic:baseline-delete"/>
          </IconButton>
          <StyledModal
            title="Are you sure you want to delete the project?"
            open={isDeleteModalOpen}
            onClose={handleCloseDeleteModal}
          />
        </div>
      </div>
      <StyledIcon
        sx={{
          color: (theme) => theme.palette[color].dark,
          backgroundImage: (theme) =>
            `linear-gradient(135deg, ${alpha(theme.palette[color].dark, 0)} 0%, ${alpha(
              theme.palette[color].dark,
              0.24
            )} 100%)`,
        }}
      >
        <Iconify icon={icon} width={24} height={24} />
      </StyledIcon>
      <Typography variant="h3">{ title}</Typography>
<div style={{display:'flex', justifyContent:'center', alignItems:"center"}}>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 , marginRight:'10px'}}>
       {/* <span style={{fontWeight:'bold', fontSize:"16px"}}>Public Vapid Key: </span>{vapidKey} */}
        </Typography> <CopyButton text={vapidKey} btnText={"Copy public VAPID"} />
        </div>
    </Card>
  );
}
