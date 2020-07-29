import React, { useCallback } from 'react';
import {Button} from '@shopify/polaris';

const TableAction = ({ id, status, onClick }) => {
  const toggleAction = useCallback(() => {
    onClick(id);
  }, [id, onClick]);

  if (status === 'deactivated') {
    return null;
  }

  return (
    <Button onClick={toggleAction} plain>
      Transfer
    </Button>
  )
}

export default TableAction;