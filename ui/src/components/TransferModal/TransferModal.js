import React, { useState, useCallback, useEffect } from 'react';
import { Modal, TextField, Stack, Select } from '@shopify/polaris';
import { getCustomerFunding } from '../../services/customers';
import { getAccountFunding } from '../../services/account';
import { makeTransfer } from '../../services/transfer';

export const TransferModal = ({ customerId, open, handleModalSubmit }) => {
  const [foundTo, setFoundsTo] = useState([]);
  const [foundFrom, setFoundsFrom] = useState([]);
  const [transferValue, setTransferValue] = useState('0');
  const [transferTo, setTransferTo] = useState();
  const [transferFrom, setTransferFrom] = useState();

  useEffect(() => {
    if (!customerId) {
      return;
    }

    const getCustomerFundings = async () => {
      const fundings = await getCustomerFunding(customerId);
      
      const options = fundings.filter((item) => {
        return item.status === 'verified' && !item.removed;
      }).map((item) => {
        return { label: item.name, value: item.id }
      });
      setFoundsTo(options);
      setTransferTo(options[0].value);
    }

    const getAccountFundings = async () => {
      const accountFundings = await getAccountFunding(customerId);
      
      const accountOptions = accountFundings.filter((item) => {
        return item.status === 'verified' && !item.removed;
      }).map((item) => {
        return { label: item.name, value: item.id }
      });
      setFoundsFrom(accountOptions);
      setTransferFrom(accountOptions[0].value);
    }

    getCustomerFundings();
    getAccountFundings();
  }, [customerId]);

  const handleTransferValue = useCallback((value) => {
    setTransferValue(value);
  }, []);

  const handleTransferTo = useCallback((value) => {
    setTransferTo(value);
  }, []);

  const handleTransferFrom = useCallback((value) => {
    setTransferFrom(value);
  }, []);

  const handleSubmit = useCallback(async () => {
    await makeTransfer({
      amountValue: transferValue,
      transferFrom,
      transferTo,
    });
    handleModalSubmit();
  }, [transferValue, transferFrom, transferTo, handleModalSubmit]);

  if (!open) {
    return null;
  }

  return (
    <Modal
      title="Send funds"
      open={open}
      onClose={handleModalSubmit}
      primaryAction={{
        content: 'Send Founds',
        onAction: handleSubmit,
      }}
      secondaryActions={[
        {
          content: 'Cancel',
          onAction: handleModalSubmit,
        },
      ]}
    >
      <Modal.Section>
        <Stack vertical>
          <Stack.Item>
            <TextField
              value={transferValue}
              onChange={handleTransferValue}
              prefix="$"
              label="Amount to send"
              type="number"
            />
          </Stack.Item>
          <Stack.Item>
            <Select
              label="Sand found From"
              options={foundFrom}
              onChange={handleTransferFrom}
              value={transferFrom}
            />
          </Stack.Item>
          <Stack.Item>
            <Select
              label="Sand found to"
              options={foundTo}
              onChange={handleTransferTo}
              value={transferTo}
            />
          </Stack.Item>
        </Stack>
      </Modal.Section>
    </Modal>
  )
}
