import axios from 'axios'

export const getCustomers = async () => {
  try {
    const response = await axios.get(`http://localhost:3001/dev/customers`)
    const customers = response.data._embedded.customers
    return customers
  } catch (error) {
    console.error(error)
  }
}

export const getCustomerFunding = async (id) => {
  try {
    const response = await axios.get(`http://localhost:3001/dev/customers/${id}/accounts`)
    return response.data || [];
  } catch (error) {
    console.error(error)
  }
}