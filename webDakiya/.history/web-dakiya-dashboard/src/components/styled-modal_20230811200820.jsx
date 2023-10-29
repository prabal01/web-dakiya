import React, { useState } from 'react';
import BeautifulModal from './BeautifulModal';

const StyledModal = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Open Modal</button>
      <BeautifulModal
        open={openModal}
        onClose={handleCloseModal}
        title="Beautiful Modal"
        content="This is a beautiful modal using MUI styled components."
        actions={<button onClick={handleCloseModal}>Close</button>}
      />
    </div>
  );
};

export default StyledModal;