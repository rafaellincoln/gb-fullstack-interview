import React, { useState } from 'react';
import { Page, Card, DataTable } from '@shopify/polaris';
import { Loading } from './components';
import { getCustomers } from './services/customers'

function App() {
  const [customers, setCustomers] = useState([])
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    const fetchCustomers = async () => {
      setLoading(true)
      const newCustomers = await getCustomers()
      setCustomers(newCustomers)
      setLoading(false)
    }

    fetchCustomers()
  },[])

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
            ]}
            headings={[
              'Id',
              'Email',
              'Name',
              'Status',
            ]}
            rows={
              customers?.length > 0 ? customers.map(customer => {
                const { id, email, firstName, lastName, status} = customer
                return [ id, email, `${firstName} ${lastName}`,status ]
              })
              : []
            }
            footerContent={`Showing ${customers?.length} of ${customers?.length} results`}
          />
        )}
      </Card>
    </Page>
  );
}

export default App;