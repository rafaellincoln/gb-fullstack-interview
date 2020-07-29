import React, { useState, useCallback } from 'react';
import { Page, Card, DataTable } from '@shopify/polaris';
import { Loading, TableAction, TransferModal } from './components';
import { getCustomers } from './services/customers'

function App() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [customerSelected, setCustomerSelected] = useState();

  React.useEffect(() => {
    const fetchCustomers = async () => {
      setLoading(true)
      const newCustomers = await getCustomers()
      setCustomers(newCustomers)
      setLoading(false)
    }

    fetchCustomers()
  },[]);

  const handleAction = useCallback((customerId) => {
    setCustomerSelected(customerId);
    setOpenModal(true);
  }, []);

  const handleModalSubmit = useCallback(() => {
    setCustomerSelected(null);
    setOpenModal(false);
  }, []);

  return (
    <Page title="Customers">
      <Card>
        {loading ? <Loading /> : (
          <DataTable
            columnContentTypes={[
              'text',
              'text',
              'text',
              'text',
              'text',
            ]}
            headings={[
              'Id',
              'Email',
              'Name',
              'Status',
              'Action'
            ]}
            rows={
              customers?.length > 0 ? customers.map(customer => {
                const { id, email, firstName, lastName, status} = customer
                return [
                  id,
                  email,
                  `${firstName} ${lastName}`,
                  status,
                  <TableAction
                    key={id}
                    id={id}
                    status={status}
                    onClick={handleAction}
                  />
                ]
              })
              : []
            }
            footerContent={`Showing ${customers?.length} of ${customers?.length} results`}
          />
        )}
      </Card>
      <TransferModal
        open={openModal}
        customerId={customerSelected}
        handleModalSubmit={handleModalSubmit}
      />
    </Page>
  );
}

export default App;