import React from 'react';
import { TransferModal } from './TransferModal';

const Modal = ({ customerId, open, handleModalSubmit }) => {
  if (!open) {
    return null;
  }

  return (
    <TransferModal
      customerId={customerId}
      open={open}
      handleModalSubmit={handleModalSubmit}
    />
  )
}

export default Modal;