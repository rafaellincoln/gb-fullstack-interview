import React, { useState } from 'react';
import { Page, Card, DataTable } from '@shopify/polaris';
import { Loading } from './components';

function App() {
  const rows = [
    [1, 'Emerald Silk Gown', 'Paid'],
    [2, 'Mauve Cashmere Scarf', 'Unpaid'],
    [3, 'Navy Merino', 'Paid'],
  ];
  const [loading, setLoading] = useState(false);

  return (
    <Page title="Customers">
      <Card>
        {loading ? <Loading /> : (
          <DataTable
            columnContentTypes={[
              'numeric',
              'text',
              'text',
            ]}
            headings={[
              'Id',
              'Name',
              'Status',
            ]}
            rows={rows}
            footerContent={`Showing ${rows.length} of ${rows.length} results`}
          />
        )}
      </Card>
    </Page>
  );
}

export default App;