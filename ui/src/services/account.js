import axios from 'axios'

export const getAccountFunding = async () => {
  try {
    const response = await axios.get('http://localhost:3001/dev/account')
    return response.data._embedded['funding-sources']
  } catch (error) {
    console.error(error)
  }
}